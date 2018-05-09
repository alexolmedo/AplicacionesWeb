import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from './parametros.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [], // Importar otros módulos
  controllers: [AppController, AppPeliculaController, ParametrosController],
  components: [UsuarioService], //Componentes
})
export class AppModule {}
