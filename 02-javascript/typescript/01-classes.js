var nombre = 'Alexander';
nombre = 'Olmedo';
var cedula = '1724885775';
// cedula = '1724885775'; No hay como
var apellido = 'Olmedo'; // duck Typing
apellido = 1;
apellido = {};
var edad = 1;
var casado = false;
var fechaNacimiento = new Date();
var usuario = {
    nombre: 'Alexander',
    edad: 22
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirUsuario = function (saludo) {
        //template strings
        return saludo + ". Mi nombre es: " + this.nombre + ", y mi edad es: " + this.edad;
    };
    return Usuario;
}());
var adrian = new Usuario('Alexander', 28);
console.log(adrian.imprimirUsuario('Hola!'));
//console.log(usuario);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad, esposo) {
        this.nombre = nombre;
        this._edad = _edad;
        this.esposo = esposo;
    }
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (nuevaEdad) {
            // cambiar los datos o transformarlos
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var vicente = new UsuarioDos('Alexander', 28);
console.log('Alexander', vicente);
vicente.edad = 22;
var carlos = {
    nombre: 'Carlos',
    edad: 18,
    esposa: new Usuario('Carla', 19)
};
