import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntentoevaluacionService } from './intentoevaluacion.service';
import { CreateIntentoevaluacionDto } from './dto/create-intentoevaluacion.dto';
import { UpdateIntentoevaluacionDto } from './dto/update-intentoevaluacion.dto';

@Controller('intentoevaluacion')
export class IntentoevaluacionController {
  constructor(private readonly intentoevaluacionService: IntentoevaluacionService) {}

  @Post()
  create(@Body() createIntentoevaluacionDto: CreateIntentoevaluacionDto) {
    return this.intentoevaluacionService.create(createIntentoevaluacionDto);
  }

  @Get()
  findAll() {
    return this.intentoevaluacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intentoevaluacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntentoevaluacionDto: UpdateIntentoevaluacionDto) {
    return this.intentoevaluacionService.update(+id, updateIntentoevaluacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intentoevaluacionService.remove(+id);
  }
}
