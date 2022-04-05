const express = require('express')
const router = express.Router()

router.get('/chat',(req,res)=>{

    res.sendFile('/mnt/c/Users/kjun9/Desktop/nvm/tryNodejs/public/createChat.html')
})

module.exports = router