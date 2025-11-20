
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  id: string;

  @Prop()
  idevaluation: number;

  @Prop()
  iduser: string;

  @Prop()
  idtype: string;

  @Prop()
  idcomment: string;

  @Prop()
  performancelevel: string;

  @Prop()
  suggestions: string;

  @Prop()
  shippingdate: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
