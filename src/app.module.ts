import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { IntentoevaluacionModule } from './intentoevaluacion/intentoevaluacion.module';
import { InsigniaModule } from './insignia/insignia.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RetroalimentacionModule } from './retroalimentacion/retroalimentacion.module';
import { ProgresoModule } from './progreso/progreso.module';

@Module({
  imports: [
    // 👇 Aquí reemplazas por tu cadena de conexión de MongoDB Atlas:
    MongooseModule.forRoot(
      'mongodb+srv://miguelurriaga333_db_user:1z7mui6WdtcQcaLn@orange.awxjyui.mongodb.net/?appName=orange'
    ),
    UsuarioModule,
    EvaluacionModule,
    IntentoevaluacionModule,
    InsigniaModule,
    RetroalimentacionModule,
    ProgresoModule,
  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}

