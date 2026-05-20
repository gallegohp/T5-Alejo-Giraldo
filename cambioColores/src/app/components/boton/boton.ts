import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: false,
  templateUrl: './boton.html',
  styleUrl: './boton.scss',
})
export class Boton {
  @Input() texto: string = '';
  @Output() buttonClicked = new EventEmitter<void>(); 

  onClick(){
    this.buttonClicked.emit();
  }
}
