import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: ProductModel[] = [];

  createProduct(product: ProductModel): void {
    this.products.push(product);
  }

  deleteProduct(product: ProductModel): void {
    this.products = this.products.filter((p) => p.id !== product.id);
  }
}
