const Router =require('express')
const db = require('../db')

//import { posts_db_name } from '../Utilities/API_utilities'
const posts_db_name = 'sponsors'

const sponsorsRouter = Router()

sponsorsRouter.get('/api/sponsors', (req, res) => {
    db.getAll(posts_db_name).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log('error getting all sponsors', error)
        return res.status(500).json(error)
    })
})

sponsorsRouter.post('/api/sponsors', function(req, res) {
    db.insertOne(posts_db_name, req.body).then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(506).json({'error': error})
    })
})

sponsorsRouter.put('/api/sponsors', function(req, res) {
    db.updateOneById(posts_db_name, req.body).then(response => {
        res.status(201).json({msg: 'successfully edited sponsor'});
    }).catch(error => {
        console.log('error is', error)
        res.status(506).json({'error': error})
    })
})

sponsorsRouter.get('/api/sponsors/delete/:id', function(req, res) {
    const postId = req.params.id
    db.deleteOne(posts_db_name, postId).then(response => {
        res.status(201).json({msg: 'successfully deleted sponsor'});
    }).catch(error => {
        console.log('error is', error)
        res.status(506).json({'error': error})
    })
})

module.exports = sponsorsRouter