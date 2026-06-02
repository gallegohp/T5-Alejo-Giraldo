import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-card-product',
  standalone: false,
  templateUrl: './card-product.html',
  styleUrl: './card-product.scss',
})
export class CardProduct {
  @Input () product: ProductModel;

  @Output() onDelete = new EventEmitter<void>();

  onClick(){
    this.onDelete.emit();
  }
}
