const assert = require('assert')
const bcrypt = require('bcrypt')
const ObjectID = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
//const nodeExcel = require('excel-export')
const json2xls = require('json2xls')
const fs = require('fs')
const nodeExcel = require('exceljs')

//const MongoDB = require('../config/projectInfoData.json')['mongoData']
const MongoDB = process.env.MONGODB_URI;
console.log("MongoDB: ", MongoDB)

let db
let url

if (process.env.NODE_ENV === 'production') {
    const mongoPass = require('../config/secret.json').mongoDbPassword
    url = MongoDB['productionURL'].replace('<password>', mongoPass)
} else {
    url = MongoDB
}
MongoClient.connect(url, (err, dbParam) => {
    assert.equal(null, err)
    console.log('Successfully connected to MongoDB server.')
    db = dbParam
    db.collection('user').createIndex({ 'email': 1 }, { unique: true })
    return
})

function getAll(collection) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find({}).toArray((err, result) => {
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
        bcrypt.hash(obj.passphrase, 10, (err, hash) => {
            // Store hash in database
            obj.passphrase = hash
            db.collection(collection).insertOne(obj, (err, result) => {
                if (err) {
                    console.log('insertOne err', err)
                    return reject(err)
                }
                return resolve(result)
            })
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
            name: 1,
            email: 1,
            country: 1,
            region: 1,
            phone: 1,
            interests: 1,
            skills: 1,
            isAdmin: 1,
        }
        db.collection(collection).find(query, fieldsWanted).toArray((err, result) => {
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
