# Sensor Varaible Font

Providing variable fonts with a semantic use in graphic interfaces to establish a relationship between typography and the data collected by different sensors.

El proyecto da un uso semántico a las tipografías variables en interfaces gráficas, estableciendo una relación entre la propia tipografía y los datos recogidos por diferentes sensores.

## Prototype Nº1. Distance sensor applied to the weight of the typography on the control panel of a car

[![Sensor Variable Font - distancia](/img/sensorvariablefont-distancia.jpg)](https://vimeo.com/341418395 "Sensor Variable Font - distancia")

In the first prototype it has been considered pertinent to simulate the interface of the on-board computer of a car, relating the distance at which the car is with respect to another object, car or person.

On the one hand the elements would be the distance sensor, with a minimum value of 2 centimeters that is able to register the sensor and a maximum value of 40 centimeters. The maximum value has been limited to 40 centimeters by the context of simulation that we find. The recorded value is updated every 100 milliseconds. The sensor used is called HC-SR04 and calculates the distance from ultrasound. And on the other hand the variable typography Kairos Sans and the axis of variation Weight, with a minimum value of 250 and a maximum value of 900.

The second step following the model is responsible for establishing the relationships of the values described above through the so-called normalizing function, resulting in the corresponding value of the axis of variation weight, with the distance detected by the sensor. At first, the minimum value of the sensor was related to the minimum value of the variation axis and its corresponding maximum values.

The third step has been to act on the prototype at a semantic level. For this purpose, use has been made of the Significant Function. The message we want to convey is to draw the attention of the driver as he reduces the distance to a possible collision. As the selected element has been the axis of weight variation, if we want to attract the attention of the driver we must increase the value of the weight variable. Therefore we are talking about a significant process of juxtaposition: if the shock distance decreases, the weight of the typography increases.

After testing, it appears that if a linear progression were followed, the changes in axle values would not be sufficiently perceptible to the driver. It has therefore been considered appropriate to add an exponential increase that progressively increases the weight value as the distance is reduced. Finally, once the mapped value has been transformed from the process of significance it is decided to apply to all glyphs.

