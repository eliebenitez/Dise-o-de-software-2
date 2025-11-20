import { Module } from '@nestjs/common';
import { InsigniaService } from './insignia.service';
import { InsigniaController } from './insignia.controller';

@Module({
  controllers: [InsigniaController],
  providers: [InsigniaService],
})
export class InsigniaModule {}
