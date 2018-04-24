let nombre: string = 'Alexander';
nombre = "Daniel";
const cedula = '1718137159';
// cedula = 1724885775; No hay como
let apellido: any = 'Olmedo'; //Duck Typing
apellido = 1;
apellido = {};

let casado:boolean = true;

let usuario = {
    nombre: 'Alexander',
    edad: 28
};

class Usuario{
    public nombre: string;
    private edad: number;
    constructor (mNombre:string, mEdad:number){
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    imprimirUsuario(saludo:string):string {
        //template strings
        return `${saludo}, Mi nombre es: ${this.nombre}, y mi edad es: ${this.edad}`;
    }
}

class UsuarioDos {
    constructor(public nombre: string, private edad: number){

    }
}

let alexander = new Usuario('Alexander', 22);
let alexanderDos = new UsuarioDos('Alexander', 22);
console.log('alexDos', alexanderDos);

interface UsuarioTres {
    nombre: string;
    edad: number;
}

let carlos:UsuarioTres = {
    nombre: 'Carlos',
    edad: 18
};

