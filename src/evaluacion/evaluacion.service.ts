import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Evaluacion, EvaluacionDocument } from './schemas/evaluacion.schema';


@Injectable()
export class EvaluacionService {
  constructor(@InjectModel('Evaluacion') private evaluacionModel: Model<EvaluacionDocument>) {}

  create(createEvaluacionDto: CreateEvaluacionDto) {
    return 'This action adds a new evaluacion';
  }

  findAll() {
    return `This action returns all evaluacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluacion`;
  }

  update(id: number, updateEvaluacionDto: UpdateEvaluacionDto) {
    return `This action updates a #${id} evaluacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluacion`;
  }
}
