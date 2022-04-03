const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{

    res.sendFile('/mnt/c/Users/kjun9/Desktop/nvm/tryNodejs/public/index.html')
})

module.exports = router