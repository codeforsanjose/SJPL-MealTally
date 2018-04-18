const ObjectID = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient

let db
let db_local
let local_url = 'mongodb://127.0.0.1:27017'
let url = local_url
let local_meals

// if we have a production db copy the stuff to local
const copyProdToLocal = (db) => {

    db.collection('test_meals').find({}).toArray().then(meals => {
        console.log("all meals found: ", meals.length)
        local_meals = meals
        MongoClient.connect(local_url, (err, dbParam) => {
            console.log("url:", local_url)
            console.log("error:", err)
            console.log('Successfully connected to MongoDB server.')
            db_local = dbParam
            db_local.collection('test_meals').insert(local_meals).catch(function(error){
                console.log(error.code)
            })
            console.log('finished!')
            return
        })
    }).catch(function(error) {
        console.log(error)
    });
}

// otherwise setup an empty collection for local usage
const createLocalDB = () => {
    MongoClient.connect(local_url, (err, dbParam) => {
        console.log("url:", local_url)
        console.log("error:", err)
        console.log('Successfully connected to MongoDB server.')
        db_local = dbParam
        db_local.createCollection('test_meals').catch(function(error){
            console.log(error.code)
        })
        console.log('finished!')
        return
    })
}

// get the db location from config file or setup the local db if no config file
try {
    const MongoDBData = require('./projectInfoData.json')['mongoData']
    url = MongoDBData['productionURL']
    MongoClient.connect(url, (err, dbParam) => {
        console.log("url:", url)
        console.log("error:", err)
        console.log('Successfully connected to MongoDB server.')
        db = dbParam
        copyProdToLocal(db)
    })
} catch (e) {
    console.log('No config. Setting up local db...')
    url = local_url
    createLocalDB()
}
