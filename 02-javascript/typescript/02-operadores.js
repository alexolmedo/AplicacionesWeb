var arregloNumerosUno = [1, 2, 3, 4, 5];
var arregloUsuarios = [
    {
        nombre: 'Adrian',
        edad: 28
    },
    {
        nombre: 'Vicente',
        edad: 10
    }, {
        nombre: 'Wendy',
        edad: 70
    }, {
        nombre: 'Carolina',
        edad: 32
    }, {
        nombre: 'Carlos',
        edad: 39
    },
];
var arregloCuentasFamiliares;
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
// let totalEdadDeLosUsuarios = arregloUsuarios.reduce(
//     (total, usuario: UsuarioArreglo) => { total + usuario.edad,
//
//     },
//     0
// );
var usuariosCasados = arregloUsuarios.map(function (usuario) {
    usuario.casado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = 100;
    return usuario;
});
console.log('usuariosCasados', usuariosCasados);
console.log('arregloUsuarios', arregloUsuarios);
