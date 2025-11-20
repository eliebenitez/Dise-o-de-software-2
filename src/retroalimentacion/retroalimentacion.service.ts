import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIntentoevaluacionDto } from './dto/create-Retroalimentacion.dto';
import { UpdateIntentoevaluacionDto } from './dto/update-Retroalimentacion.dto';
import { Retroalimentacion, RetroalimentacionDocument } from './schemas/retroalimentacion.schema';

@Injectable()
export class RetroalimentacionService {
  constructor(
    @InjectModel(Retroalimentacion.name)
    private retroalimentacionModel: Model<RetroalimentacionDocument>,
  ) {}

  async create(createRetroalimentacionDto: CreateRetroalimentacionDto): Promise<Retroalimentacion> {
    const nuevaRetro = new this.retroalimentacionModel(createRetroalimentacionDto);
    return nuevaRetro.save();
  }

  async findAll(): Promise<Retroalimentacion[]> {
    return this.retroalimentacionModel.find().exec();
  }

  async findOne(id: string): Promise<Retroalimentacion> {
    return this.retroalimentacionModel.findById(id).exec();
  }

  async update(id: string, updateDto: UpdateRetroalimentacionDto): Promise<Retroalimentacion> {
    return this.retroalimentacionModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Retroalimentacion> {
    return this.retroalimentacionModel.findByIdAndDelete(id).exec();
  }
}
