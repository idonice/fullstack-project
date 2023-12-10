// product.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async getProductById(productID: string): Promise<Product> {
    const product = await this.productModel.findOne({ productID }).exec();
    if (!product) {
      throw new NotFoundException(`Product with productID ${productID} not found`);
    }
    return product;
  }
}