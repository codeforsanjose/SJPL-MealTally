
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var path = require("path")
const auth = require('./lib/auth')
const bcrypt = require('bcrypt')
const passport = require('passport')

var mongodb = require('mongodb')
var mongoClient = mongodb.MongoClient
var ObjectID = mongodb.ObjectID;  // Used in API endpoints
const db = require('./lib/db')


const publicDir = __dirname + '/public'

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors());  // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(express.static("public"));
auth.init(app)

app.get(["/", "/login", "/signup", "/admin"], (reqest, response) => {
    response.sendFile(path.join(publicDir, '/index.html'))
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

app.post('/api/user', (req, res) => {
  // It is good practice to specifically pick the fields we want to insert here *in the backend*,
  // even if we have already done so on the front end. This is to prevent malicious users
  // from adding unexpected fields by modifying the front end JS in the browser.

  var newUser =  _.pick(req.body, [
      'name', 'email', 'phone', 'passphrase'])
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

app.listen(app.get('port'), function () {
    console.log("[*] mealtally running on port", app.get('port'));
});