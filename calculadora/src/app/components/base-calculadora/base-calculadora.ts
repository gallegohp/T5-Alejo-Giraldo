import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-base-calculadora',
  standalone: false,
  templateUrl: './base-calculadora.html',
  styleUrl: './base-calculadora.scss',
})


export class BaseCalculadora {
  @Output() calculado = new EventEmitter<void>();


}
