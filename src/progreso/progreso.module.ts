import { Module } from '@nestjs/common';
import { ProgresoService } from './progreso.service';
import { ProgresoController } from './progreso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Progreso, ProgresoSchema } from './schemas/progreso.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Progreso.name, schema: ProgresoSchema }])],
  controllers: [ProgresoController],
  providers: [ProgresoService],
})
export class ProgresoModule {}
