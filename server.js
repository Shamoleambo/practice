const http = require('http')

const port = 3000

const app = http.createServer((req, res) => {
  res.statusCode = 200
  res.end(`<h1>Hello Tiago!</h1>`)
})

app.listen(port, () => {
  console.log(`My app is runnig on port ${port}`)
})
