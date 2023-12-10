// src/mongoose.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://idonice3:BhqMKSmk99G2fpYB@cluster0.vddvrkr.mongodb.net/')
    ],
})
export class MongooseConfigModule { }
