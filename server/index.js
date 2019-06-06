/*Se necesita instalar Node.Js https://nodejs.org/es/
Instalar con npm install lo descrito en package.json

Cargar en la Arduino porque el sensor de distancia necesita un Firmata específico:
https://gist.githubusercontent.com/rwaldron/0519fcd5c48bfe43b827/raw/f17fb09b92ed04722953823d9416649ff380c35b/PingFirmata.ino

Librería Johnny five sensor distancia: HCSR04
http://johnny-five.io/examples/proximity-hcsr04/

Para mapear valores: https://github.com/rwaldron/johnny-five/wiki/Fn*/

//INICIO CONFIGURACIÓN
'use strict';
//Johnny-five es una librería para controlar Arduino con Js
const five = require("johnny-five");
//Framework para Node.js
const express = require('express'); 
const app = express();
const server = require('http').createServer(app);
//Librería para comunicar cliente y servidor en tiempo real 
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html')
});
//FIN CONFIGURACIÓN

//DECLARACIÓN DE VARIABLES
let sensor;
let valorSensor;
let valorNormalizado;

// control de Arduino
five.Board().on('ready', function () {
  console.log('Tenemos conexión con Arduino');

  //Configuración sensor distancia en la placa
  sensor = new five.Proximity({
    controller: "HCSR04", //nombre del sensor
    pin: 7 //donde está pinchado el sensor
  });

  //Registro de los valores en tiempo real
  sensor.on("change", function () {
    //recojo en un variable el valor registrado
    valorSensor = Math.round(this.cm); //Math.round es para redondear el valor
    
    //FUNCIÓN NORMALIZADORA
    //el constrain es para limitar los valores máximos y mínimos
    valorNormalizado = five.Fn.constrain(five.Fn.map(valorSensor, 2, 40, 900, 250), 250, 900);
    console.log(valorSensor);
  });
})

//COMUNICACIÓN EN TIEMPO REAL ENTRE EL SERVIDOR Y EL CLIENTE
io.on('connection', function (socket) {
  //esto es para ver que estamos conectados
  console.log(`cliente: ${socket.id}`)

  //envio el valor cada X tiempo al cliente
  setInterval(() => {
    socket.emit('envioValorSensorNormalizado', valorNormalizado, valorSensor)
  }, 1000)
})
// FIN COMUNICACIÓN

//En qué puerto
const port = process.env.PORT || 3000;
server.listen(port);
console.log(`Accede en el navegador a http://localhost:${port}`);
