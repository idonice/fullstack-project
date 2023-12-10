// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://idonice3:BhqMKSmk99G2fpYB@cluster0.vddvrkr.mongodb.net/'),
    ProductModule,
  ],
})
export class AppModule { }
