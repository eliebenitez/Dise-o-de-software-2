import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateIntentoevaluacionDto } from './dto/create-intentoevaluacion.dto';
import { UpdateIntentoevaluacionDto } from './dto/update-intentoevaluacion.dto';
import { Intentoevaluacion, IntentoevaluacionDocument } from './schemas/intentoevaluacion.schema';


@Injectable()
export class IntentoevaluacionService {
  constructor(@InjectModel('Intentoevaluacion') private intentoevaluacionModel: Model<IntentoevaluacionDocument>) {}

  create(createIntentoevaluacionDto: CreateIntentoevaluacionDto) {
    return 'This action adds a new intentoevaluacion';
  }

  findAll() {
    return `This action returns all intentoevaluacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intentoevaluacion`;
  }

  update(id: number, updateIntentoevaluacionDto: UpdateIntentoevaluacionDto) {
    return `This action updates a #${id} intentoevaluacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} intentoevaluacion`;
  }
}
