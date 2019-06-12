const Router =  require('express')
const db = require('../lib/db')
const posts_db_name = require('../Utilities/API_utilities')

const librariesRouter = Router()

librariesRouter.get('/api/posts', (req, res) => {
    db.getAll(posts_db_name).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log('error getting all Posts', error)
        return res.status(500).json(error)
    })
})

librariesRouter.post('/api/posts', function(req, res) {
    
})

module.exports = librariesRouter