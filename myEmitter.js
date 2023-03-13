const EventEmitter = require('node:events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
  console.log('An event occurred')
})
myEmitter.emit('event')

module.exports = myEmitter
