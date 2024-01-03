// subcategory.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service'; // Create and import SubcategoryService
import { Subcategory } from './subcategory.schema';
import { Types } from 'mongoose'
@Controller('sc')
export class SubcategoryController {
    constructor(private readonly subcategoryService: SubcategoryService) { }

    @Get()
    async getAllSubcategory(): Promise<Subcategory[]> {
        return this.subcategoryService.getAllSubcategory();
    }

    @Get(':category')
    async getSubcategoriesByCategory(@Param('category') category: String) {
        // Convert categoryId string to ObjectId

        return this.subcategoryService.getSubcategoryByCategoryTitle(category);
    }


    @Post()
    async createSubcategory(@Body() subcategory: Subcategory): Promise<Subcategory> {
        return this.subcategoryService.createSubcategory(subcategory);
    }
}

