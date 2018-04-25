let arregloNumerosUno: number[] = [1, 2, 3, 4, 5];
let arregloUsuarios = [
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
    }];
let arregloDeudasFamililares = [
    140,
    314.23,
    50.94,
    17,
    200
];


// let arregloNumerosDos: Array<number> = [1,2];

let sumarDosNumeros =
    (numeroUno: number, numeroDos: number): number => { // funciones de flecha gorda => fat arrow functions
        return numeroUno + numeroDos;
    };
let potenciaDeDosDeUnNumero = numero => {
    return numero * numero;
};

let potenciaDeDosDeUnNumeroDos = (numero: number, potencia: number) => numero * potencia;

let sumatoriaDeValores = 0;
let resultadoForEach = arregloNumerosUno.forEach(
    (valorDelArreglo, indice, arreglo) => {
        sumatoriaDeValores = sumatoriaDeValores + valorDelArreglo;
        console.log(valorDelArreglo);
        console.log(indice);
        console.log(arreglo);
    }
);
console.log('Resultado forEach', resultadoForEach);
console.log('sumatoriaDeValores', sumatoriaDeValores);

var resultadoSuma = arregloNumerosUno
    .reduce(
        (valorActualDeLaOperacion, valorDelArreglo) => valorActualDeLaOperacion - valorDelArreglo
        ,
        20
    )
;
console.log('resultadoSuma', resultadoSuma);


let totalEdadDeLosUsuarios = arregloUsuarios.reduce(
    (total: number, usuario: UsuarioArreglo) => total + usuario.edad,
    0
);

console.log('totalEdad', totalEdadDeLosUsuarios);


function calcularDeuda(edad: number): number {
    return arregloDeudasFamililares
        .reduce((totalDeuda, valorDeuda) =>
            (totalDeuda + (valorDeuda * (edad / 100)))
        )
}


const usuariosCasados = arregloUsuarios
    .map(
        (usuario: UsuarioArreglo) => {
            usuario.casado = false;
            return usuario;
        }
    )
    .map(
        (usuario: UsuarioArreglo) => {
            usuario.deuda = calcularDeuda(usuario.edad);
            return usuario;
        }
    )
    .filter(
        (usuario: UsuarioArreglo) => (usuario.deuda <= 310)
    )
    // .every( // AND
    //     (usuario: UsuarioArreglo) => {
    //         return usuario.edad <= 30;
    //     }
    // )
    .some( // OR
        (usuario: UsuarioArreglo) => {
            return usuario.edad >= 18;
        }
    );
console.log('usuariosCasados', usuariosCasados);
console.log('arregloUsuarios', arregloUsuarios);

interface UsuarioArreglo {
    nombre: string;
    edad: number;
    casado?: boolean;
    deuda?: number;
}