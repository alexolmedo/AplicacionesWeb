var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, urlImagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImagen = urlImagen;
    }
    return Usuario;
}());
var adrian = new Usuario('Adrian', 'Eguez', 'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg');
console.log('Usuario:', adrian);
function cambiarImagen() {
    var etiquetaImagen = document
        .getElementById('imagen');
    etiquetaImagen.src = adrian.urlImagen;
}
var HttpWeb = /** @class */ (function () {
    function HttpWeb() {
    }
    HttpWeb.prototype.get = function (url, cb) {
        var configuracion = {
            method: 'GET',
        };
        var request = new Request(url, configuracion);
        fetch(request)
            .then(function (response) {
            cb(undefined, response);
        })
            .catch(function (error) {
            cb(error, undefined);
        });
    };
    HttpWeb.prototype.post = function (url, formulario, cb) {
        var configuracion = {
            method: 'POST',
            body: formulario
        };
        var request = new Request(url, configuracion);
        fetch(request)
            .then(function (response) {
            cb(undefined, response);
        })
            .catch(function (error) {
            cb(error, undefined);
        });
    };
    return HttpWeb;
}());
var http_web = new HttpWeb();
function traerDatos() {
    var url = 'http://localhost:3000/';
    http_web.get(url, function (error, datos) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(datos
                .text()
                .then(function (datos) {
                console.log('Datos', datos);
            }));
        }
    });
}
function cambiarBordeTabla() {
    var etiquetaTablita = document.getElementById('tablita');
    etiquetaTablita.className = etiquetaTablita.class + ' borde-azul';
}
function crearContenido() {
    var etiquetaContenedora = document
        .getElementById('contenido');
    var parrafo = document
        .createElement("p");
    parrafo.innerHTML = 'Hola amigos';
    var imagen = document
        .createElement("img");
    imagen.src = adrian.urlImagen;
    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);
}
