const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    console.log("sssssss")
    MongoClient.connect('mongodb+srv://amalarishab:A12345@cluster0.5bzeucd.mongodb.net/ExpenseTracker?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db()
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}