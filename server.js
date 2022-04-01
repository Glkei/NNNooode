const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const port = 8000
const Router = require('./router')

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/chat',(req,res)=>{
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