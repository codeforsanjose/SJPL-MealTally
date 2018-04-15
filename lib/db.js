const assert = require('assert')
const bcrypt = require('bcrypt')
const ObjectID = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
//const nodeExcel = require('excel-export')
const json2xls = require('json2xls')
const fs = require('fs')
const nodeExcel = require('exceljs')


//const MongoDB = require('../config/projectInfoData.json')['mongoData']
//const MongoDB = process.env.MONGODB_URI;

let db
let url

const MongoDBData = require('../config/projectInfoData.json')['mongoData'] || process.env.MONGODB_URI
if (process.env.NODE_ENV === 'production') {
    url = MongoDBData['productionURL']
} else {
    url = MongoDBData['productionURL']
}

MongoClient.connect(url, (err, dbParam) => {
    assert.equal(null, err)
    console.log('Successfully connected to MongoDB server. ')
    db = dbParam
    db.collection('user').createIndex(
        { 
            'email': 1
        },
        {
            unique: true 
        }
    )
    db.collection('meals').createIndex(
        { 
            'date': 1
        },
        {
            unique: false 
        }
    )
    return
})

function getAll(collection, sortParam = {}) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find({}).sort(sortParam).toArray((err, result) => {
            if (err) {
                console.log('err', err)
                return reject(err)
            }
            return resolve(result)
        })
    })
}

function getByEmail(collection, email) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find({ email: email.email }).toArray((err, result) => {
            if (err) {
                console.log('getByEmail err', err)
                return reject(err)
            }
            if (result.length == 0) {
                return reject('Not found by email')
            }
            return resolve(result[0])
        })
    })
}

function getById(collection, id) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find({ _id: new ObjectID(id) }).toArray((err, result) => {
            if (err) {
                console.log('getById err', err)
                return reject(err)
            }
            return resolve(result[0])
        })
    })
}

function insertOne(collection, obj) {
    return new Promise((resolve, reject) => {
        db.collection(collection).insertOne(obj, (err, result) => {
            if (err) {
                console.log('insertOne err', err)
                return reject(err)
            }
            return resolve(result)
        })
    })
}

function updateOneById(collection, obj) {
    return new Promise((resolve, reject) => {
        const query = { '_id': ObjectID(obj._id) }
        obj._id = ObjectID(obj._id)
        db.collection(collection).updateOne(query, obj, (err, result) => {
            if (err) {
                console.log('updateOneById err', err)
                return reject(err)
            }
            return resolve(result)
        })
    })
}

function updateOne(collection, query, obj) {
    return new Promise((resolve, reject) => {
        db.collection(collection).updateOne(query, obj, (err, result) => {
            if (err) {
                console.log('updateOne err', err)
                return reject(err)
            }
            return resolve(result)
        })
    })
}

function findAll(collection, query) {
    return new Promise((resolve, reject) => {
        let fieldsWanted = {
            _id: 1,
            date: 1,
            library: 1,
            type: 1,
            received: 1,
            leftovers: 1,
            staff: 1,
            children: 1,
            adult: 1,
            volunteer: 1,
            wasted: 1,
            nonreimbursment: 1
        }
        db.collection(collection).find(query, fieldsWanted).sort({date: -1}).toArray((err, result) => {
            if (err) {
                console.log('err', err)
                return reject(err)
            }
            return resolve(result)
        })
    })

}
function findOne(collection, query) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find(query).toArray((err, result) => {
            if (err) {
                console.log('err', err)
                return reject(err)
            }
            return resolve(result[0])
        })
    })
}

module.exports = {
    getAll,
    getById,
    getByEmail,
    findOne,
    findAll,
    insertOne,
    updateOne,
    updateOneById,
}
