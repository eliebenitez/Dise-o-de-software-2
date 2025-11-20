
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProgresoDocument = HydratedDocument<Progreso>;

@Schema()
export class Progreso {
  @Prop()
  id: string;

  @Prop()
  idusuario: number;

  @Prop()
  idactividad: string;

  @Prop()
  state: string;

  @Prop()
  startdate: string;

  @Prop()
  enddate: string;
}

export const ProgresoSchema = SchemaFactory.createForClass(Progreso);
