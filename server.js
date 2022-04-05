const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)


const indexRouter = require('./routes/indexRouter')
const chatRouter = require('./routes/chatRouter')
const createRouter = require('./routes/createRouter')
const Chat = require('./models/chatModel')
const db = require('./databases/database')

app.use(express.static('public'))
app.set('view engine','ejs')
app.use('/',indexRouter)
app.use('/chat',chatRouter)
app.use('/create',createRouter)

app.get('/mongo', (req,res) => {
    const chat = new Chat({
        title:'new mongo',
        snippet:'aaa',
        body:'wwww'
    })

    chat.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log('error is -> '+ err);
        })
})

io.on('connection',(socket) => {

    console.log('User is access now')

    socket.on("chat message",(msg) => {
        io.emit('chat msg',msg)
    })
    
})

server.listen(8000,()=>{
    console.log(`The Server is has open......(http://localhost:8000)`);
})