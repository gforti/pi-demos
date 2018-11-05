# pi-demos

### Install

Install all dependences before running any demo at the root demo folder

```sh
$ npm install
```

### understanding pins
| Code | Meaning |
| ------ | ------ |
| VCC | 5v (+) (3.3v or 5v) | 
| GND | Ground (-) |
| DO | GPIO pin (Digital Output) |
| AO | Analog Output |


### GPIO Layout

![alt text](https://github.com/gforti/pi-demos/blob/master/Pi-GPIO-Layout.png "GPIO Layout")


### PI Sensors

![alt text](https://github.com/gforti/pi-demos/blob/master/pi-sensors.jpg "Sensors")


### Issues with NPM install
```sh
$ sudo npm rebuild
```

### Stop Terminal Process / App
```sh
$ ctrl + c
```

### Remove Folder
```sh
$ sudo rm -rf [folder-name]
```

### Clone GIT Repo
```sh
$ git clone https://github.com/...
```

### check ip address
```sh
$ hostname -I
```

### SSH in
```sh
$ ssh pi@<IP> [-port 22 ]
```

## Recommend Sites
- https://www.piddlerintheroot.com/
- https://flows.nodered.org/
- https://projects.raspberrypi.org/en/projects/getting-started-with-node-red
- https://github.com/node-red/node-red-dashboard
- https://github.com/arvindr21/pi_videoEMailIntruder
- https://github.com/natevw/node-rf24
- https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp


## Setting up the Raspberry PI

- https://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/

### Install Node.js

```sh
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

then
```sh
$ sudo apt install -y nodejs
```

```sh
$ node -v
$ npm -v
```

### install GIT

```sh
$ sudo apt-get install git
```
or

```sh
$ sudo apt install git
```
