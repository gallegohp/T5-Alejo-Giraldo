import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPipe } from './pages/product-pipe';
import { Product } from './pages/product/product';
import { FromProduct } from './components/from-product/from-product';
import { ListProduct } from './components/list-product/list-product';
import { CardProduct } from './components/card-product/card-product';



@NgModule({
  declarations: [
    ProductPipe,
    Product,
    FromProduct,
    ListProduct,
    CardProduct
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
