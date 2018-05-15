import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";

@Module({
  imports: [], // Importar otros modulos
  controllers: [
    AppController,
    AppPeliculaController,
    ParametrosController
  ],
  components: [
    UsuarioService
  ], // Componentes
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(LogMiddleware)
      .with('EPN', 1989)
      .forRoutes(
        ParametrosController,
        AppPeliculaController,
        AppController
      );
  }
}
