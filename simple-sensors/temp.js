const dht = require('dht-sensor');
let current = dht.read(11, 17); // 11 : DHT11, 18 : BCM GPIO

console.log(current.humidity);
console.log(current.temperature);

// use sudo node temp.js
