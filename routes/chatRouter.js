const express = require('express')
const router = express.Router()
const app = express()

router.get('/:id',(req,res)=>{

    res.render('chatroom', { id : `${req.params.id}`})

})

module.exports = router