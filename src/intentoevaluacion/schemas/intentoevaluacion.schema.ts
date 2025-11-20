
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IntentoevaluacionDocument = HydratedDocument<Intentoevaluacion>;

@Schema()
export class Intentoevaluacion {
  @Prop()
  id: string;

  @Prop()
  idevaluacion: number;

  @Prop()
  precision: string;

  @Prop()
  numberhits: string;

  @Prop()
  mistake: string;

  @Prop()
  evaluationdate: string;

  @Prop()
  confusionmatrix: string;
}

export const IntentoevaluacionSchema = SchemaFactory.createForClass(Intentoevaluacion);
