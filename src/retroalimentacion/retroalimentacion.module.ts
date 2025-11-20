import { Module } from '@nestjs/common';
import { RetroalimentacionService } from './retroalimentacion.service';
import { RetroalimentacionController } from './retroalimentacion.controller';

@Module({
  providers: [RetroalimentacionService],
  controllers: [RetroalimentacionController]
})
export class RetroalimentacionModule {}
