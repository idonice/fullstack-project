// product.controller.ts

import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('p')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  async findProducts(@Query('c') category?: string, @Query('sc') subcategory?: string, @Query('maxPrice') maxPrice?: number, @Query('brand') brand?: string): Promise<Product[]> {
    return this.productService.findProducts(category, subcategory, maxPrice, brand);
  }

  @Get(':productID') // Use the parameter name from the URL
  async getProductById(@Param('productID') productID: string): Promise<Product> {
    try {
      const product = await this.productService.getProductById(productID);
      return product;
    } catch (error) {
      return error;
    }
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.createProduct(product);
  }
}
