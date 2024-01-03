import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types, Schema as MongooseSchema } from 'mongoose';

export type SubcategoryDocument = Subcategory & Document;

@Schema()
export class Subcategory {
    @Prop({ required: true })
    title: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Category', required: true })
    categoryId: Types.ObjectId;

    @Prop({ required: true })
    imgURL: string;

}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
