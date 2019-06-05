const socket = io()

//Con "on" escucho los valores envaidos por emit
socket.on('envioValorSensorNormalizado', function (valorNormalizado, valorSensor) {

  //PASO EL VALOR DE ARDUINO A UNA VARIABLE DEFINIDA EN CSS
  let ejevariacion = document.getElementById("valorModificaEjeVariacion");
  
  //FUNCION SIGNIFICATIVA
  ejevariacion.style.setProperty('--peso', valorNormalizado);//--nombre eje variación en CSS

  //PARA MOSTRAR LOS VALORES EN EL HTML
  let valor = document.getElementById("muestroValorSensor");
  let valorBis = document.getElementById("muestroValorSensorBis");
  let valor2 = document.getElementById("muestroValorEjeVariacion");

  valor.innerHTML = `${valorSensor}`;
  valorBis.innerHTML = `${valorSensor}`;
  valor2.innerHTML = `${valorNormalizado}`;
})