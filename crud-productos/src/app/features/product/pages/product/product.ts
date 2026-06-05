import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {
  products: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = [...this.productService.products];
  }

  onSubmit(data: { nombre: string; precio: number }): void {
    const product: ProductModel = {
      id: this.nextId(),
      nombre: data.nombre,
      precio: data.precio,
    };
    this.productService.createProduct(product);
    this.products = [...this.productService.products];
  }w

  onDelete(product: ProductModel): void {
    this.productService.deleteProduct(product);
    this.products = [...this.productService.products];
  }

  private nextId(): number {
    if (this.productService.products.length === 0) {
      return 1;
    }
    return Math.max(...this.productService.products.map((p) => p.id)) + 1;
  }
}
