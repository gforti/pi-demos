# pi-demos


### Install

Install all dependences before running any demo at the root demo folder

```sh
$ npm install
```

### understanding pins
| Code | Meaning |
| ------ | ------ |
| VCC | 5v | 
| GND | Ground |
| DO | GPIO pin (Digital Output) |
| ao | Analog Output |

ground (GND) = - VCC (3.3v or 5v) = +


### GPIO Layout

![alt text](https://github.com/gforti/pi-demos/blob/master/preview/Pi-GPIO-Layout.png "GPIO Layout")


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
