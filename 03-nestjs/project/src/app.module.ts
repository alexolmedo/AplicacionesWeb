import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [], // Importar otros módulos
  controllers: [AppController],
  components: [], //Componentes
})
export class AppModule {}
