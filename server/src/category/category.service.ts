// Category.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name) private categoryModel: Model<Category>,
    ) { }

    async getAllCategory(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }
    async createCategory(title: string): Promise<Category> {
        const category = new this.categoryModel(title);
        return category.save();
    }
}
