import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();

  testVocals = 'Camilo Gallego';

  constructor (
    private storeService: StoreService,
    private productService: ProductsService
    ) {
      this.myShoppingCart = storeService.getMyShoppingCart(); 
    }
  
  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
