console.log('Hola, mundo!');
var nombre = "Alexander";
var edad = 22;
var deudad = 152.23;
var fechaNacimiento = new Date();
var casado = false;
var estoyVacio = null;
var noEstoyDefinido = undefined;

if (estoyVacio) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}

var usuario = {
    nombre: "Alexander",
    apellido: "Olmedo",
    edad: sumarDosNumeros(14,14),
    imprimirEnConsola: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad)
    }
};

console.log(usuario)
delete usuario.edad
console.log(usuario)
usuario.cedula = '1724885775'
console.log(usuario)
usuario.imprimirEnConsola()

//usuario.mascotas.nombre = 'luli'

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof casado)
console.log(typeof fechaNacimiento)

function sumarDosNumeros(numeroUno, numeroDos){
    return numeroUno + numeroDos
}

console.log(sumarDosNumeros(2,8))

var sumarDosNumerosV2 = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos
}

console.log(sumarDosNumerosV2())

var arreglo = [1, 2, 3, "Alexander", 2.2, true, undefined]

console.log(arreglo);