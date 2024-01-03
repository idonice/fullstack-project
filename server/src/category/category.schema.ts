// category.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Types } from 'mongoose'
export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop({ required: true })
    title: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
