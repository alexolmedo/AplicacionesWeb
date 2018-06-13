class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
        public urlImagen: string,
    ) {
    }
}

const adrian = new Usuario('Adrian', 'Eguez', 'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg');
console.log('Usuario:', adrian);


function cambiarImagen() {
    const etiquetaImagen: any = document
        .getElementById('imagen');
    etiquetaImagen.src = adrian.urlImagen;
}


class HttpWeb {
    get(url, cb) {
        const configuracion = {
            method: 'GET',
        };
        const request = new Request(
            url,
            configuracion);

        fetch(request)
            .then((response) => {
                cb(undefined, response);
            })
            .catch((error) => {
                cb(error, undefined);
            })
    }

    post(url, formulario, cb) {
        const configuracion = {
            method: 'POST',
            body: formulario
        };
        const request = new Request(
            url,
            configuracion);

        fetch(request)
            .then((response) => {
                cb(undefined, response);
            })
            .catch((error) => {
                cb(error, undefined);
            })
    }
}

const http_web = new HttpWeb();

function traerDatos() {
    const url = 'http://localhost:3000/';
    http_web.get(url, (error, datos) => {
        if (error) {
            console.log(error);
        } else {
            console.log(datos
                .text()
                .then(
                    (datos) => {
                        console.log('Datos', datos);
                    }
                ));
        }
    })
}


function cambiarBordeTabla() {
    const etiquetaTablita: any = document.getElementById('tablita');

    etiquetaTablita.className = etiquetaTablita.class + ' borde-azul'

}

function crearContenido() {
    const etiquetaContenedora = document
        .getElementById('contenido');

    const parrafo = document
        .createElement("p");
    parrafo.innerHTML = 'Hola amigos';

    const imagen = document
        .createElement("img");
    imagen.src = adrian.urlImagen;

    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);

}





