const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Mongos接続パス
const dbURI = 'mongodb+srv://UserName:Password@cluster0.k29sg.mongodb.net/YourDatabas?retryWrites=true&w=majority'

//MongosDBに接続
mongoose.connect(dbURI ,{useNewUrlParser: true ,useUnifiedTopology: true })
        .then((result)=>{console.log('successful connected MongosDB')})
        .catch((err)=>{console.log('error ditails-> ' + err)})
        

// module.exports = 