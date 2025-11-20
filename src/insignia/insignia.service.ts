import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInsigniaDto } from './dto/create-insignia.dto';
import { UpdateInsigniaDto } from './dto/update-insignia.dto';
import { Insignia, InsigniaDocument } from './schemas/insignia.schema';

@Injectable()
export class InsigniaService {
  constructor(@InjectModel('Insignia') private insigniaModel: Model<InsigniaDocument>) {}

  create(createInsigniaDto: CreateInsigniaDto) {
    return 'This action adds a new insignia';
  }

  findAll() {
    return `This action returns all insignia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insignia`;
  }

  update(id: number, updateInsigniaDto: UpdateInsigniaDto) {
    return `This action updates a #${id} insignia`;
  }

  remove(id: number) {
    return `This action removes a #${id} insignia`;
  }
}
