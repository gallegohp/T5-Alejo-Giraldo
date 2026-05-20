import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  standalone: false,
  templateUrl: './cuadrado.html',
  styleUrl: './cuadrado.scss',
})
export class Cuadrado {
  @Input() color: string = '';
}
