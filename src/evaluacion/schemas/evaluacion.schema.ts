
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EvaluacionDocument = HydratedDocument<Evaluacion>;

@Schema()
export class Evaluacion {
  @Prop()
  id: string;

  @Prop()
  title: number;

  @Prop()
  type: string;

  @Prop()
  description: string;

  @Prop()
  createfor: string;

  @Prop()
  creationdate: string;

  @Prop()
  state: string;
}

export const EvaluacionSchema = SchemaFactory.createForClass(Evaluacion);
