const express = require('express')
const fs = require('fs')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const port = 8000

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.get('/chat/:id',(req,res)=>{
    res.sendFile(__dirname + '/chat.html')
})

io.on('connection',(socket) => {

    console.log('User is access now')

    socket.on("chat message",(msg) => {
        io.emit('chat msg',msg)
    })
    
})

server.listen(port,()=>{
    console.log(`The Server is has open......(http://localhost:${port})`);
})