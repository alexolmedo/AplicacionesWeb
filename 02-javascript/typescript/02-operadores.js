var arregloNumerosUno = [1, 2, 3, 4, 5];
var arregloUsuarios = [
    {
        nombre: 'Adrian',
        edad: 28
    },
    {
        nombre: 'Vicente',
        edad: 10
    },
    {
        nombre: 'Wendy',
        edad: 70
    },
    {
        nombre: 'Carolina',
        edad: 32
    },
    {
        nombre: 'Carlos',
        edad: 39
    }
];
var arregloDeudasFamililares = [
    140,
    314.23,
    50.94,
    17,
    200
];
// let arregloNumerosDos: Array<number> = [1,2];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var potenciaDeDosDeUnNumero = function (numero) {
    return numero * numero;
};
var potenciaDeDosDeUnNumeroDos = function (numero, potencia) { return numero * potencia; };
var sumatoriaDeValores = 0;
var resultadoForEach = arregloNumerosUno.forEach(function (valorDelArreglo, indice, arreglo) {
    sumatoriaDeValores = sumatoriaDeValores + valorDelArreglo;
    console.log(valorDelArreglo);
    console.log(indice);
    console.log(arreglo);
});
console.log('Resultado forEach', resultadoForEach);
console.log('sumatoriaDeValores', sumatoriaDeValores);
var resultadoSuma = arregloNumerosUno
    .reduce(function (valorActualDeLaOperacion, valorDelArreglo) { return valorActualDeLaOperacion - valorDelArreglo; }, 20);
console.log('resultadoSuma', resultadoSuma);
var totalEdadDeLosUsuarios = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
console.log('totalEdad', totalEdadDeLosUsuarios);
function calcularDeuda(edad) {
    return arregloDeudasFamililares
        .reduce(function (totalDeuda, valorDeuda) {
        return (totalDeuda + (valorDeuda * (edad / 100)));
    });
}
var usuariosCasados = arregloUsuarios
    .map(function (usuario) {
    usuario.casado = false;
    return usuario;
})
    .map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
})
    .filter(function (usuario) { return (usuario.deuda <= 310); })
    .some(// OR
function (usuario) {
    return usuario.edad >= 18;
});
console.log('usuariosCasados', usuariosCasados);
console.log('arregloUsuarios', arregloUsuarios);
