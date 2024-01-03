// category.controller.ts
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Category, CategoryDocument } from './category.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
@Controller('c')
export class CategoryController {
    constructor(
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    ) { }

    @Get()
    async getAllCategory(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    @Post()
    async createCategory(@Body() category: Category): Promise<Category> {
        const newCategory = new this.categoryModel(category);
        return newCategory.save();
    }
}
