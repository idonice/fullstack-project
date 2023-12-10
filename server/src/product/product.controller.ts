// product.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
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
