
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;  // Used in API endpoints
//var db;

const publicDir = __dirname + '/public'

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors());  // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI;

console.log("MONGODB_URI", MONGODB_URI)
///////////////////////
///////////////////////
///////////////////////
const session = require('express-session')
const _ = require('lodash')
const errorHandler = require('errorhandler')
const passport = require('passport')
const path = require('path')
const cookieParser = require('cookie-parser')
const db = require('./lib/db')
const auth = require('./lib/auth')

app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
auth.init(app)

app.get(['/', '/signup', '/login', '/profile/:id'], (req, res) => {
    res.sendFile(path.join(publicDir, '/index.html'))
})

app.post('/api/login', (req, res, next) => {
    // See: https://github.com/jaredhanson/passport-local
    passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
            console.log('error with login:', err, user)
            return res.status(422).json(err)
        }
        req.login(user, () => {
            return res.json(user)
        })    
    })(req, res, next)

})

app.get('/api/auth/facebook', passport.authenticate('facebook'));

app.get('/api/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect(`/profile/${req.user._id}`)
});

const prepareSearchQuery = (searchQuery) => {
    if (searchQuery.interests) {
        searchQuery.interests = {
            $in: searchQuery.interests
        } 
    }
    else if (searchQuery.skills) {
        const regexSkills = searchQuery.skills.map( (skill) => {
            return new RegExp(skill, "gi")
        })
        searchQuery.skills = {
            $in: regexSkills
        } 
    }
    var query = { $or: []}
    Object.keys(searchQuery).map( key => {
        var keyObj = {}
        keyObj[key] = searchQuery[key]
        query['$or'].push(keyObj)    
    })
    return query
}

app.post('/api/admin/search/users', (req, res) => {
    if (auth.isAdmin(req)) {
        searchQuery = prepareSearchQuery(req.body)
        db.findAll('user', searchQuery).then(users => {
            return res.json(users);
        });
    } else {
        return res.json({ error: 'You do not have permission to access this resource...' });
    }
});

app.get('/api/users', (req, res) => {
    if (auth.isAdmin(req)) {
        db.getAll('user').then(users => {
            return res.json({ users })
        })
    } else {
        return res.json({ error: 'You do not have permission to access this resource.' })
    }
})

app.get('/api/user/:id', (req, res) => {
    if (req.user) {
        var user = req.user
        return res.json({ user });
    }
    if (req.isAuthenticated() && req.params.id === req.user._id.toString()) {
        db.getById('user', req.params.id).then(user => {
            req.user = user
            return res.json({ user })
        })
    } else {
        return res.status(401).json({ error: 'Not authenticated' })
    }
})

app.get('/api/admin/users', (req, res) => {
    if (auth.isAdmin(req)) {
        db.getAll('user').then((results) => {
            return res.json(results)
        }).catch((error) => {
            console.log(error)
            return res.status(422).json(error)
        })
    }
    else {
        return res.json({ error: 'You do not have permission to access this resource.....' })
    }
})

app.get('/api/admin/user/exportData', (req, res) => {
    db.getAll('user').then((results) => {
        var headers = Object.keys(results[0])
        var conf ={}
        conf.stylesXmlFile = "./lib/styles.xml"
        conf.name = "UserData"
        conf.cols = headers
        
        var values = results.map( result => {
            delete result['passphrase']
            return Object.values(result)
        })
        console.log(values)
        var sheet = nodeExcel.execute(conf)
        fs.writeFileSync('./lib/volunteers.xlsx', sheet, 'binary')

        //res.setHeader('Content-Type', 'application/vnd.openxmlformats')
        //res.setHeader("Content-Disposition", "attachment; filename=" + "UserData.xlsx")
        const file = './lib/volunteers.xlsx'
        const filename = 'volunteers.xlsx'
        return res.download(file, filename)
    }).catch((error) => {
        console.log(error)
        return reject(error)
    })
});
app.post('/api/user', (req, res) => {
    // It is good practice to specifically pick the fields we want to insert here *in the backend*,
    // even if we have already done so on the front end. This is to prevent malicious users
    // from adding unexpected fields by modifying the front end JS in the browser.
    var newUser =  _.pick(req.body, [
        'name', 'email', 'phone', 'passphrase'])
    newUser.isAdmin = false
    newUser.approvedBy = ''
    db.insertOne('user', newUser).then(result => {
        var userRecord = req.body
        userRecord.recordType = 'New User'
        //mailer.notifyAdmin(userRecord)
        return res.json(result)
    }).catch(error => {
        console.log(error)
        return res.status(422).json(error)
    })
})

app.post('/api/admin/user/makeAdmin', (req, res) => {
    if (auth.isAdmin(req)) {
        db.getByEmail('user', _.pick(req.body, ['email'])).then( volunteer => {
            volunteer.isAdmin = true
            volunteer.approvedBy = req.user._id
            db.updateOneById('user', volunteer).then(result => {
                return res.status(200).json(result)
            }).catch(error => {
                console.log(error)
                return res.status(200).json(error)
            })
        }).catch( error => {
            console.log('error in getByEmail', error)
        })
    }
    else {
        return res.json({ error: 'You do not have permission to access this resource.....' })
    }
})

app.put('/api/user', (req, res) => {
    if (req.isAuthenticated() && req.body._id === req.user._id.toString()) {
        db.updateOneById('user', req.body).then(result => {
            var userRecord = req.body;
            userRecord.recordType = 'User Profile Update'
            //mailer.notifyAdmin(userRecord);
            return res.json(result);
        }).catch(error => {
            console.log(error)
            return res.json(error)
        })
    } else {
        return res.json({ error: 'Not authenticated' })
    }
})













///////////////////////
///////////////////////
///////////////////////

// Initialize database connection and then start the server.
/*
mongoClient.connect(MONGODB_URI, function (err, database) {
  if (err) {
    process.exit(1);
  }
  db = database;  // Our database object from mLab
  console.log("Database connection ready");
  // Initialize the app.
  app.listen(app.get('port'), function () {
    console.log("[*] mealtally running on port", app.get('port'));
  });
});
*/
app.get(["/", "/login", "/signup", "/admin"], (reqest, response) => {
    response.sendFile(path.join(publicDir, '/index.html'))
})

/*
* Endpoint --> "/api/libraries"
*/

// GET: retrieve all libraries
app.get("/api/libraries", function(req, res) {
  db.collection("libraries").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get libraries");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*
* Endpoint --> "/api/meals"
*/

// GET: retrieve meals in date range of one week
app.get("/api/meals/:start/:end", function(req, res) {
  var cursor = db.collection("meals").aggregate([
    { $match: { date: {$gte: req.params.start, $lte: req.params.end}}},
    { $group: { _id: { library: "$library", mealType: "$mealType" },
                totalReceived: { $sum: "$numReceivedMeals"},
                totalLeftover: { $sum: "$numLeftoverMeals"},
                totalStaff: { $sum: "$numStaffMeals"},
                totalChildren: { $sum: "$numChildrenMeals"},
                totalAdult: { $sum: "$numAdultMeals"},
                totalVolunteer: { $sum: "$numVolunteerMeals"},
                totalWasted: { $sum: "$numWastedMeals"}
              }
    }
  ]).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get meals in date range");
    } else {
      res.status(200).json(docs);
    }
  });
});


// POST: create a new todo
app.post("/api/meals", function(req, res) {
  db.collection("meals").insertOne(req.body, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to post meal");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*
* Endpoint --> "/api/logs"
*/

// POST: create a new log
app.post("/api/logs", function(req, res) {
  db.collection("logs").insertOne(req.body, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to post log");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

// Error handler for the api
function handleError(res, reason, message, code) {
  console.log("API Error: " + reason);
  res.status(code || 500).json({"Error": message});
}
app.listen(app.get('port'), function () {
    console.log("[*] mealtally running on port", app.get('port'));
})
