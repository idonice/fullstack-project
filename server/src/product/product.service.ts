import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  create(product: Product): void {
    this.products.push(product);
  }
}
