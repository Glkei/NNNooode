const express = require('express')
const router = express.Router()
const Chat = require('../models/chatModel')


router.get('/',(req,res)=>{

    Chat.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render( 'index', { datas: result })})
        .catch((err) => {
            console.log(err);
        })  
})

module.exports = router