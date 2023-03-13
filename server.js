const http = require('http')

const port = 3000

const server = http.createServer()
server.on('request', (req, res) => {
  console.log('same thing as before')
  res.statusCode = 200
  res.end('<h1>Hoi hoi</h1>')
})

server.listen(port, () => {
  console.log(`My app is runnig on port ${port}`)
})
