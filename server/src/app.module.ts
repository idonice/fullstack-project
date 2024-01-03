import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category/category.controller';
import { ProductController } from './product/product.controller';
import { Category, CategorySchema } from './category/category.schema';
import { Subcategory, SubcategorySchema } from './subcategory/subcategory.schema';
import { SubcategoryController } from './subcategory/subcategory.controller';
import { Product, ProductSchema } from './product/product.model';
import { CategoryService } from './category/category.service';
import { SubcategoryService } from './subcategory/subcategory.service';
import { ProductService } from './product/product.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://idonice3:BhqMKSmk99G2fpYB@cluster0.vddvrkr.mongodb.net/'),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Subcategory.name, schema: SubcategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [CategoryController, SubcategoryController, ProductController],
  providers: [CategoryService, SubcategoryService, ProductService]
})
export class AppModule { }
