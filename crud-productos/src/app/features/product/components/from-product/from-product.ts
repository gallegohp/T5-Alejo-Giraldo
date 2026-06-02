import { Component, EventEmitter, Output } from '@angular/core';

export interface ProductFormData {
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-from-product',
  standalone: false,
  templateUrl: './from-product.html',
  styleUrl: './from-product.scss',
})
export class FromProduct {
  @Output() onSubmit = new EventEmitter<ProductFormData>();

  nombre = '';
  precio: number | null = null;

  get isFormValid(): boolean {
    const nombreValido = this.nombre.trim().length > 0;
    const precioNumerico = Number(this.precio);
    const precioValido = !Number.isNaN(precioNumerico) && precioNumerico > 0;
    return nombreValido && precioValido;
  }

  onClick(): void {
    if (!this.isFormValid) {
      return;
    }

    this.onSubmit.emit({
      nombre: this.nombre.trim(),
      precio: Number(this.precio),
    });

    this.nombre = '';
    this.precio = null;
  }
}
