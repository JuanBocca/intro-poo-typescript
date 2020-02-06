'use strict';
// string
var cadena = "Victor";
// number
var numero = 12;
// boleano
var trueFalse = true;
// any
var cualquiera = "hola " + 77;
// arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [12, 13, 14];
// let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, trueFalse, cualquiera, lenguajes, years);
