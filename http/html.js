const http = require('http')
const {readFile} = require('fs')

const host = '127.0.0.1'
const port = '8080'


let conteudo = ' '

readFile('index.html',(err, data)=>{
    if(err) throw err 
    conteudo = data
})

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(conteudo)

})

server.listen(port,host, ()=>{
    console.log("Servidor Online...")
})