let nombre: string = 'Alexander';
nombre = 'Olmedo';
const cedula = '1724885775';
// cedula = '1724885775'; No hay como
let apellido: any = 'Olmedo'; // duck Typing
apellido = 1;
apellido = {};

let edad: number = 1;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

let usuario = {
    nombre: 'Alexander',
    edad: 22
};

class Usuario {
    nombre: string;
    private edad: number;

    constructor(mNombre: string, mEdad: number) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }

    imprimirUsuario(saludo: string): string {
        //template strings
        return `${saludo}. Mi nombre es: ${this.nombre}, y mi edad es: ${this.edad}`;
    }


}

let adrian = new Usuario('Alexander', 28);
console.log(adrian.imprimirUsuario('Hola!'));

//console.log(usuario);
class UsuarioDos {

    constructor(public nombre: string,
                private _edad: number,
                public esposo?:UsuarioDos) {
    }

    get edad(): number {
        return this._edad;
    }

    set edad(nuevaEdad: number) {
        // cambiar los datos o transformarlos
        this._edad = nuevaEdad;
    }

}


let vicente = new UsuarioDos('Alexander', 28);
console.log('Alexander', vicente);

vicente.edad = 22;

interface UsuarioTres {
    nombre: string;
    edad: number;
    esposa: Usuario
}

let carlos: UsuarioTres = {
    nombre: 'Carlos',
    edad: 18,
    esposa: new Usuario('Carla',19)
};