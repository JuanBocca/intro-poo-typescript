'use strict'

var bicicleta = {
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km/h',
    cambiaColor: function(nuevoColor){
        //bicicleta.color = nuevoColor
        this.color = nuevoColor;
        console.log(this);
    }
};

bicicleta.cambiaColor("Azul");