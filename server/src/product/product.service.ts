

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }
  async findProducts(category?: string, subcategory?: string, maxPrice?: number, brand?: string): Promise<Product[]> {
    let query: any = {};

    if (category) {
      query['category'] = category;
    }

    if (subcategory) {
      query['subcategory'] = subcategory;
    }
    if (brand) {
      const capitalized = brand.charAt(0).toUpperCase() + brand.slice(1);
      query['productDetails.brand'] = capitalized;
    }
    console.log(query);

    return this.productModel.find(query).exec();
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