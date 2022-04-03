const express = require('express')
const fs = require('fs')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const port = 8001

const db = require('./sourse/database')
const indexRouter = require('./routes/indexRouter')
const chatRouter = require('./routes/chatRouter')

app.use('/',indexRouter)
app.use('/chat',chatRouter)

io.on('connection',(socket) => {

    console.log('User is access now')

    socket.on("chat message",(msg) => {
        io.emit('chat msg',msg)
    })
    
})

server.listen(port,()=>{
    console.log(`The Server is has open......(http://localhost:${port})`);
})