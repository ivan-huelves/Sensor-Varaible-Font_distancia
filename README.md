# Sensor Varaible Font

El proyecto da un uso semántico a las tipografías variables en interfaces gráficas, estableciendo una relación entre la propia tipografía y los datos recogidos por diferentes sensores.

Providing variable fonts with a semantic use in graphic interfaces to establish a relationship between typography and the data collected by different sensors.

## Prototipo Nº1. Sensor de distancia aplicado al peso de la tipografía en el cuadro de control de un automóvil

![Sensor Variable Font - distancia](/img/sensorvariablefont-distancia.jpg)

En el primer prototipo se ha considerado pertinente simular la interfaz del ordenador de abordo de un coche, relacionando la distancia a la que se encuentra el automóvil respecto otro objeto, coche o persona.

Por un lado los elementos serían el sensor de distancia, con un valor mínimo de 2 centímetros que es capaz de registrar el sensor y un valor máximo de 40 centímetros. El valor máximo ha sido limitado a 40 centímetros por el contexto de simulación que nos encontramos. El valor registrado se actualiza cada 100 milisegundos. El sensor empleado se denomina HC-SR04 y calcula la distancia a partir de ultrasonidos. Y por otro la tipografía variable Kairos Sans y el eje de variación Peso, con un valor mínimo de 250 y un valor máximo de 900.

El segundo paso siguiendo el modelo se encarga de establecer las relaciones de los valores anteriormente descritos a través de la denominada Función normalizadora, dando como resultado el valor correspondiente del eje de variación peso, con la distancia que detecta el sensor. En un primer momento se ha relacionado el valor mínimo del sensor con el valor mínimo del eje de variación, y sus correspondientes valores máximos.

El tercer paso ha sido actuar sobre el prototipo a un nivel semántico. Para ello se ha hecho uso de la Función significativa. El mensaje que queremos transmitir es el de llamar la atención del conductor según va reduciendo la distancia ante una posible colisión. Como el elemento seleccionado ha sido el eje de variación peso, si queremos atraer la atención del conductor debemos aumentar el valor de la variable peso. Por lo tanto estamos hablando de un proceso significativo de yuxtaposición: si la distancia de choque disminuye, el peso de la tipografía aumenta.

Tras hacer las pertinentes pruebas, se observa que, si se siguiese una progresión lineal, los cambios en los valores del eje no serían lo suficientemente perceptibles para el conductor. Por lo tanto se ha considerado oportuno añadir un incremento exponencial que aumente progresivamente el valor del peso según se reduce la distancia. Finalmente una vez que el valor mapeado se ha transformado a partir del proceso de significación se decide aplicar a todos los glifos.

