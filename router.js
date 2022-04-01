
const express = require('express')
const router = express.Router()
const http = require('http')
    
router.get('/',(req,res) => {
    res.send('<h2>This is home page. Choose your chat room. </h2>')
})
    
router.get('/chat',(req,res) => {

    res.sendFile('../index.html')
})

module.exports = router