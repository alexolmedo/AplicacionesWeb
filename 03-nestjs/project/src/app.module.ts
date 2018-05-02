import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";

@Module({
  imports: [], // Importar otros módulos
  controllers: [AppController, AppPeliculaController],
  components: [], //Componentes
})
export class AppModule {}
