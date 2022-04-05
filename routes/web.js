// const express = require('express')
// const app = express()

// const indexRouter = require('./indexRouter')
// const chatRouter = require('./chatRouter')
// const createRouter = require('./createRouter')
// const Chat = require('./models/chatModel')

// app.use(express.static('public'))
// app.set('view engine','ejs')
// app.use('/',indexRouter)
// app.use('/chat',chatRouter)
// app.use('/create',createRouter)

// app.get('/mongo', (req,res) => {
//     const chat = new Chat({
//         title:'new mongo',
//         snippet:'aaa',
//         body:'wwww'
//     })

//     chat.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log('error is -> '+ err);
//         })
// })