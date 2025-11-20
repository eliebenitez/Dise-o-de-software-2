import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProgresoDto } from './dto/create-progreso.dto';
import { UpdateProgresoDto } from './dto/update-progreso.dto';
import { Progreso, ProgresoDocument } from './schemas/progreso.schema';

@Injectable()
export class ProgresoService {
  constructor(@InjectModel(Progreso.name) private progresoModel: Model<ProgresoDocument>) {}

  create(createProgresoDto: CreateProgresoDto) {
    const created = new this.progresoModel(createProgresoDto);
    return created.save();
  }

  findAll() {
    return this.progresoModel.find().exec();
  }

  findOne(id: string) {
    return this.progresoModel.findById(id).exec();
  }

  update(id: string, updateProgresoDto: UpdateProgresoDto) {
    return this.progresoModel.findByIdAndUpdate(id, updateProgresoDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.progresoModel.findByIdAndDelete(id).exec();
  }
}
