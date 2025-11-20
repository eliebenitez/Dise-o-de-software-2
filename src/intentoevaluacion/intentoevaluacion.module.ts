import { Module } from '@nestjs/common';
import { IntentoevaluacionService } from './intentoevaluacion.service';
import { IntentoevaluacionController } from './intentoevaluacion.controller';

@Module({
  controllers: [IntentoevaluacionController],
  providers: [IntentoevaluacionService],
})
export class IntentoevaluacionModule {}
