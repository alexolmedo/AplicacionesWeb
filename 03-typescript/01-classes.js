var nombre = 'Alexander';
nombre = "Daniel";
var cedula = '1718137159';
// cedula = 1724885775; No hay como
var apellido = 'Olmedo'; //Duck Typing
apellido = 1;
apellido = {};
var casado = true;
var usuario = {
    nombre: 'Alexander',
    edad: 28
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirUsuario = function (saludo) {
        //template strings
        return saludo + ", Mi nombre es: " + this.nombre + ", y mi edad es: " + this.edad;
    };
    return Usuario;
}());
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return UsuarioDos;
}());
var alexander = new Usuario('Alexander', 22);
var alexanderDos = new UsuarioDos('Alexander', 22);
console.log('alexDos', alexanderDos);
var carlos = {
    nombre: 'Carlos',
    edad: 18
};
