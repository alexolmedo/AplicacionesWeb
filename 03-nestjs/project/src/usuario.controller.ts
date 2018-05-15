import {Controller, Get, Post, Query, Req, Res} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";

@Controller('Usuario')
export class UsuarioController {

    constructor(private _usuarioService: UsuarioService){

    }

    @Post('crear')
    crearUsuario(
        @Query() queryParametros,
        @Req() request,
        @Res() response
    ){
        const enviaNombre = queryParametros.nombre;
        const enviaApellido = queryParametros.apellido;
        const enviaEdad = queryParametros.edad;

        const enviaParametros = (enviaNombre && enviaApellido && enviaEdad);

        if (enviaParametros){
            const nuevoUsuario = new Usuario(queryParametros.nombre, queryParametros.apellido, queryParametros.edad);
            const usuarios = this._usuarioService.agregarUsuario(nuevoUsuario);
            return response.send(usuarios);

        } else {
            return response
                .status(400)
                .send({
                mensaje: 'No envía parámatros',
                status: 400})
        }
    }

    @Get('anadirCookie')
    anadirCookie(
        @Res() response,
        @Req() request,

        ){
        const parametros = {
            nombre: request.query.nombre,
            valor: request.query.valor
        }
        response.cookie(parametros.nombre, parametros.valor);
        return response.send();
    }

    @Get('buscar')
    buscar(
        @Req() request,
        @Res() response,m
    ){
        const nombreCookie = request.params.nombreCookie;

        request.cookie[nombreCookie];

        return response.send();
    }


}