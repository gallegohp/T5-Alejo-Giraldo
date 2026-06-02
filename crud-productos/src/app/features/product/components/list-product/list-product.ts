import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-list-product',
  standalone: false,
  templateUrl: './list-product.html',
  styleUrl: './list-product.scss',
})
export class ListProduct {
  @Input() products: ProductModel[] = [];
  @Output() deleteProduct = new EventEmitter<ProductModel>();

  onDelete(product: ProductModel): void {
    this.deleteProduct.emit(product);
  }
}
