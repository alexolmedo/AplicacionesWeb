import {Controller, Get, UseGuards} from "@nestjs/common";
import {UsuarioGuard} from "../guards/usuario.guard";

@Controller('usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {

    @Get('mostrar')
    mostrar(){

    }

    @Get('crear')
    crear(){

    }

}