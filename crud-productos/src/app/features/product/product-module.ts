import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './pages/product/product';
import { FromProduct } from './components/from-product/from-product';
import { ListProduct } from './components/list-product/list-product';
import { CardProduct } from './components/card-product/card-product';
import { ListEmpty } from './components/list-empty/list-empty';

@NgModule({
  declarations: [Product, FromProduct, ListProduct, CardProduct, ListEmpty],
  imports: [CommonModule, FormsModule],
  exports: [Product],
})
export class ProductModule {}
