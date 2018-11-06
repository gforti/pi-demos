# Sensors

For the `tilt` and `PIR/motion` sensor, the `index.js` file can be used to test.

Make sure the correct `GPIO` is updated before running.


### Run Program

```sh
$ node run sensors/index.js
```

Alternativly you can run `nodemon` instead of `node` on the file to reload any code changes.

It's recommend to update the `package.json` file with a script command like so

 ```js
 "scripts": {
   ...,
    "sensor": " nodemon sensors/index.js"
  },
```

Then in the terminal the command would be

```sh
$ npm run sensor
```

### PIR Connection

![alt text](https://github.com/gforti/pi-demos/blob/master/sensors/pir-connect.jpg "PIR Connection")

- Black is GND
- Red is power
- Middle is GPIO

### Setup
![alt text](https://github.com/gforti/pi-demos/blob/master/sensors/led-pir-connection.png "GPIO Layout")


## Advance Sensors

The tempature sensor is not a simple 1 or 0 value.  For this to work a different module will be needed to
read the data.  Connect the temapture sensor and run

```sh
$ node sensors/temp.js
```
