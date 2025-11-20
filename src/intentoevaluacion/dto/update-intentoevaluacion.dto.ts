import { PartialType } from '@nestjs/mapped-types';
import { CreateIntentoevaluacionDto } from './create-intentoevaluacion.dto';

export class UpdateIntentoevaluacionDto extends PartialType(CreateIntentoevaluacionDto) {}
