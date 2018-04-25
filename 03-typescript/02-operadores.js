var arregloNumerosUno = [1, 2, 3, 4, 5];
// let arregloNumerosDos: Array<number> = [1, 2, 3, 4, 5];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var potenciaDeDosNumeros = function (numero) {
    return numero * numero;
};
var potenciaDeDosNumerosDos = function (numero) { return numero * numero; };
var sumatoriaDeValores = 0;
var resultadoForEach = arregloNumerosUno.forEach(function (valorDelArreglo, indice, arreglo) {
    sumatoriaDeValores += valorDelArreglo;
    console.log(valorDelArreglo);
    console.log(indice);
    console.log(arreglo);
});
console.log('Resultado forEach', resultadoForEach);
console.log('sumatoriaDeValores', sumatoriaDeValores);
var resultadoSuma = arregloNumerosUno.reduce(function (valorActualDeLaOperacion, valorDelArreglo) {
    console.log('valorActualDeLaOperacion', valorActualDeLaOperacion);
    console.log('valorDelArreglo', valorDelArreglo);
    return valorActualDeLaOperacion - valorDelArreglo;
}, 20);
console.log('resultadoSuma', resultadoSuma);
