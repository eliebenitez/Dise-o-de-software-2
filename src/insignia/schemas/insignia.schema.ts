import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Insignia } from '../entities/insignia.entity';

export type InsigniaDocument = HydratedDocument<InsigniaSchemaClass>;

@Schema()
export class InsigniaSchemaClass {
  @Prop()
  id: string;

  @Prop()
  name: number;

  @Prop()
  description: string;

  @Prop()
  type: number;

  @Prop()
  icon: number;
}

export const InsigniaSchema = SchemaFactory.createForClass(InsigniaSchemaClass);

