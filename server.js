
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var bcrypt = require('bcrypt')
var app = express()

const publicDir = __dirname + '/public'

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors());  // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use('/public', express.static("public"));

let meals_db_name = ''

if (process.env.NODE_ENV === 'production') {
    meals_db_name = 'meals'
} else {
    meals_db_name = 'test_meals'
}
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
const pdfCreator = require('./lib/pdfCreator')

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
const findReportsDetails = (meals) => {
    var allDetailsResponse = {
        totals: {
            received: 0,
            leftovers: 0,
            adult: 0,
            childrenAndTeens: 0,
            teenStaffAndVolunteers: 0,
            unusable: 0
        }
    }
    meals.map(meal => {
        var keys = Object.keys(meal)
        keys.map(key => {
            if (allDetailsResponse['totals'][key] >= 0) {
                allDetailsResponse['totals'][key] += +meal[key]
            }
        })
    })
    return allDetailsResponse
}

app.post('/api/reportsRange', (req, res) => {
    if (req.user.isAdmin) {
        const query = {
            date: {
                $gte: req.body.endDate,
                $lte: req.body.startDate
            }
        }
        console.log(query)
        if (req.body.type !== '') {
            query.type = req.body.type
        }
        if (req.body.library !== '') {
            query.library = req.body.library
        }
        db.findAll(meals_db_name, query).then(meals => {
            var response = findReportsDetails(meals)
            response['allMeals'] = meals
            return res.json(response)
        }).catch(error => {
            console.log("error in server js: ", error)
            return res.status(422).json({"errormsg": error})
        })
    }
    else {
        return res.status(422).json({"errormsg": "no access"})
    }
})

app.get('/api/auth/facebook', passport.authenticate('facebook'))

app.get('/api/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect(`/profile/${req.user._id}`)
})

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

app.post('/api/user', (req, res) => {
    // It is good practice to specifically pick the fields we want to insert here *in the backend*,
    // even if we have already done so on the front end. This is to prevent malicious users
    // from adding unexpected fields by modifying the front end JS in the browser.

    var newUser =  _.pick(req.body, [
        'name', 'email', 'phone', 'passphrase'])
    newUser.isAdmin = false
    newUser.approvedBy = ''
    bcrypt.hash(newUser.passphrase, 10, (err, hash) => {
        // Store hash in database
        newUser.passphrase = hash
        db.insertOne('user', newUser).then(result => {
            var userRecord = req.body

            return res.json(result)
        }).catch(error => {
            console.log(error)
            return res.status(422).json(error)
        })
    })
})


var fs = require('fs')
app.post('/api/generateReport', (req, res) => {
    var reports =  _.pick(req.body, ['reports'])
    pdfCreator.createPDFReport(reports['reports'], res).then( (result) => {
        res.json({"filename": result})
    }).catch(error => {
        console.log(error)
        return res.status(503)
    })
})
// this is needed for downloading the created pdf
// need to delete once sent or get an s3 bucket since not good idea or best practice to keep on our server
app.get('/pdf/:filename', (req, res) => {
    const filename = req.params.filename
    res.download('./reports/' + filename)
})

// delete the file after downloaded
app.get('/pdf/delete/:filename', (req, res) => {
    const filename = req.params.filename
    // delete file
    res.status(202).json({"msg": "deleted file"})
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
            return res.json(result);
        }).catch(error => {
            console.log(error)
            return res.json(error)
        })
    } else {
        return res.json({ error: 'Not authenticated' })
    }
})

app.get("/api/libraries", function(req, res) {
    db.getAll('libraries', {name: 1}).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log('error getting all libraries', error)
        return res.json(error)
    })
});

// POST: create a new meal
app.post("/api/meals", function(req, res) {
    delete req.body['_id']
    db.insertOne(meals_db_name, req.body).then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(406).json({"error": error})
    })
})

// PUT: edit a new meal
app.put("/api/meals", function(req, res) {
    db.updateOneById(meals_db_name, req.body).then(response => {
        console.log("success response")
        res.status(201).json({msg: 'successfully edited user'});
    }).catch(error => {
        console.log("error is", error)
        res.status(406).json({"error": error})
    })
})

app.listen(app.get('port'), function () {
    console.log("[*] mealtally running on port", app.get('port'));
})

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
