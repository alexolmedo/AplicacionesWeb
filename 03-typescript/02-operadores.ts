let arregloNumerosUno: number[] = [1, 2, 3, 4, 5];
// let arregloNumerosDos: Array<number> = [1, 2, 3, 4, 5];

let sumarDosNumeros = (numeroUno: number, numeroDos: number): number => { //fat arrow functions
    return numeroUno + numeroDos;
};

let potenciaDeDosNumeros = numero => {
    return numero*numero;
};

let potenciaDeDosNumerosDos = numero => numero * numero;

let sumatoriaDeValores = 0;
let resultadoForEach = arregloNumerosUno.forEach(
  (valorDelArreglo, indice, arreglo) => {
      sumatoriaDeValores += valorDelArreglo;
      console.log(valorDelArreglo);
      console.log(indice);
      console.log(arreglo);
  }
);

console.log ('Resultado forEach', resultadoForEach);
console.log ('sumatoriaDeValores', sumatoriaDeValores);

var resultadoSuma = arregloNumerosUno.reduce(
    (valorActualDeLaOperacion, valorDelArreglo) => {
        console.log('valorActualDeLaOperacion', valorActualDeLaOperacion);
        console.log('valorDelArreglo', valorDelArreglo);

        return valorActualDeLaOperacion - valorDelArreglo;
    },
    20
);

console.log('resultadoSuma', resultadoSuma)