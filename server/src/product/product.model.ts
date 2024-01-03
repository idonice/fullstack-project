import { Subcategory } from './../subcategory/subcategory.schema';
// product.model.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Product extends Document {
    @Prop({ required: true, unique: true })
    productID: string;

    @Prop({ type: String })
    category: string;

    @Prop({ type: String })
    subcategory: string;

    @Prop({
        required: true,
        type: {
            description: { type: String },
            brand: { type: String },
            images: { type: [String] }
        },
    })
    details: {
        description: string;
        brand: string;
        images: string[];
    };

    @Prop({
        type: {
            stars: { type: String, default: '0' },
            amount: { type: String, default: '0' },
            questions: { type: String, default: '0' },
        },
    })
    reviews: {
        stars: string;
        amount: string;
        questions: string;
    };

    @Prop({
        type: {
            curr: { type: String, default: 'USD' },
            price: { type: Number, default: 0 },
        },
    })
    price: {
        curr: string;
        price: number;
    };

    @Prop({
        type: {
            price: { type: Number, default: 0 },
            date: { type: String, default: '' },
            country: { type: String, default: '' },
        },
    })
    shipping: {
        price: number;
        date: string;
        country: string;
    };

    @Prop([
        {
            color: { type: String, default: '' },
            img: { type: String, default: '' },
        },
    ])
    colors: {
        color: string;
        img: string;
    }[];

    @Prop([
        {
            id: { type: String, default: '' },
            name: { type: String, default: '' },
        },
    ])
    modelsID: { id: string; name: string }[];

    @Prop([
        {
            title: { type: String, default: '' },
            content: { type: String, default: '' },
        },
    ])
    dealDetails: { title: string; content: string }[];

    @Prop({ type: Number, default: 0 })
    stock: number;

    @Prop([
        {
            title: { type: String, default: '' },
            content: { type: String, default: '' },
        },
    ])
    additionalDetails: { title: string; content: string }[];

    @Prop([String])
    about: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);