const express = require('express')
const fs = require('fs')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const port = 8000

const db = require('./databases/database')
const indexRouter = require('./routes/indexRouter')
const chatRouter = require('./routes/chatRouter')
const createRouter = require('./routes/createRouter')

app.use(express.static('public'))
app.set('view engine','ejs')
app.use('/',indexRouter)
app.use('/chat',chatRouter)
app.use('/create',createRouter)

io.on('connection',(socket) => {

    console.log('User is access now')

    socket.on("chat message",(msg) => {
        io.emit('chat msg',msg)
        // db.query("insert into chat_data set ?",{ PostId : 2, msg:`${ msg }`})
    })
    
})

server.listen(port,()=>{
    console.log(`The Server is has open......(http://localhost:${port})`);
})