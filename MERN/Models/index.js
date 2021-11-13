const DBconfig = require ('../Config/db.config')

const mongoose = require('mongoose')

mongoose.promise = global.promise

const db= {}

db.mongoose = mongoose

db.url = DBconfig.url

db.news = require('../Models/news.model')(mongoose)

module.exports = db
