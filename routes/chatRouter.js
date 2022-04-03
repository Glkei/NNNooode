const express = require('express')
const router = express.Router()

router.get('/:id',(req,res)=>{

    res.sendFile('/mnt/c/Users/kjun9/Desktop/nvm/tryNodejs/public/chat.html')
})

module.exports = router