import {Controller, Get, ReflectMetadata, UseGuards} from "@nestjs/common";
import {UsuarioGuard} from "../guards/usuario.guard";

@Controller('usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {

    @Get('mostrar')
    @ReflectMetadata('nombreDato', 'ValorM')
    @ReflectMetadata('permiso', 'privado')
    mostrar(){
        return 'Ok mostrar'

    }

    @Get('crear')
    @ReflectMetadata('nombreDato', 'ValorC')
    @ReflectMetadata('permiso', 'publico')

    crear(){
        return 'Ok crear'
    }

}