import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsigniaService } from './insignia.service';
import { CreateInsigniaDto } from './dto/create-insignia.dto';
import { UpdateInsigniaDto } from './dto/update-insignia.dto';

@Controller('insignia')
export class InsigniaController {
  constructor(private readonly insigniaService: InsigniaService) {}

  @Post()
  create(@Body() createInsigniaDto: CreateInsigniaDto) {
    return this.insigniaService.create(createInsigniaDto);
  }

  @Get()
  findAll() {
    return this.insigniaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insigniaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsigniaDto: UpdateInsigniaDto) {
    return this.insigniaService.update(+id, updateInsigniaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insigniaService.remove(+id);
  }
}
