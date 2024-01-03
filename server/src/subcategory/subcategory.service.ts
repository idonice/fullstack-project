// subcategory.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subcategory, SubcategoryDocument } from './subcategory.schema';
import { Category, CategoryDocument } from '../category/category.schema';

import { Types } from 'mongoose'

@Injectable()
export class SubcategoryService {
    constructor(
        @InjectModel(Subcategory.name) private subcategoryModel: Model<SubcategoryDocument>,
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>, // Inject Category model
    ) { }

    async getAllSubcategory(): Promise<Subcategory[]> {
        return this.subcategoryModel.find().exec();
    }

    async createSubcategory(subcategoryData: Subcategory): Promise<Subcategory> {
        const { title, categoryId, imgURL } = subcategoryData;
        const category = await this.categoryModel.find(categoryId).exec();

        if (!category) {
            // Handle error: Category not found
            throw new Error('Category not found');
        }

        const subcategory = new this.subcategoryModel({ title, categoryId, imgURL });
        return subcategory.save();
    }

    async getSubcategoriesByCategoryId(categoryId: Types.ObjectId): Promise<Subcategory[]> {
        const subcategories = await this.subcategoryModel.find({ 'categoryId': categoryId }).exec();
        return subcategories;
    }


    async getSubcategoryByCategoryTitle(category: String): Promise<Subcategory[]> {
        const subcategories = await this.subcategoryModel.find({ 'category': category }).exec();
        return subcategories;
    }
}


