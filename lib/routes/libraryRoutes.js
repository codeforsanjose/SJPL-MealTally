const Router =require('express')
const db = require('../db')

const posts_db_name = 'libraries'

const librariesRouter = Router()

librariesRouter.get('/api/libraries', (req, res) => {
    db.getAll(posts_db_name).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log('error getting all libraries', error)
        return res.status(500).json(error)
    })
})

librariesRouter.post('/api/libraries', function(req, res) {
    db.insertOne(posts_db_name, req.body).then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(506).json({'error': error})
    })
})

librariesRouter.put('/api/libraries', function(req, res) {
    db.updateOneById(posts_db_name, req.body).then(response => {
        res.status(201).json({msg: 'successfully edited sponsor'});
    }).catch(error => {
        console.log('error is', error)
        res.status(506).json({'error': error})
    })
})

librariesRouter.get('/api/libraries/delete/:id', function(req, res) {
    const postId = req.params.id
    db.deleteOne(posts_db_name, postId).then(response => {
        res.status(201).json({msg: 'successfully deleted sponsor'});
    }).catch(error => {
        console.log('error is', error)
        res.status(506).json({'error': error})
    })
})

module.exports = librariesRouter