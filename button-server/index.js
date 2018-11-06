const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)

const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const LED = new Gpio(4, 'out'); //use GPIO pin 4 as output
const pushButton = new Gpio(17, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

const port = process.env.port || 2900
const host_ip = require('../host-ip')

const root = __dirname

const fallback = (...pathOptions) => (req, res, next) => {
  if ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html')) {
    res.sendFile.call(res, ...pathOptions, error => error && next())
  } else next()
}

app.use(express.static(root))
app.use(fallback('index.html', { root }))

let httpInstance = server.listen(port, () => {
    console.log(`Listening on http://${host_ip}:${port}`)
})

io.sockets.on('connection', (socket) => {// WebSocket Connection
  let lightvalue = 0; //static variable for current status
  pushButton.watch((err, value) => { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    lightvalue = value;
    socket.emit('light', lightvalue); //send button status to client
  });
  socket.on('light', (data) => { //get light switch status from client
    lightvalue = data;
    if (lightvalue !== LED.readSync()) { //only change LED if status has changed
      LED.writeSync(lightvalue); //turn LED on or off
    }
  });
});

process.on('SIGINT', function () { //on ctrl+c
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
  httpInstance.close()
  process.exit(); //exit completely
});
