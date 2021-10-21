const http = require('http')

const hostname = '127.0.0.1'
const port = 8080
const url = `http://${hostname}:${port}/`

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Bem Vindo<br/>Node.JS</h1>')

})


server.listen(port, hostname)