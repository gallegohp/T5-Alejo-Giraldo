import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones-calc',
  standalone: false,
  templateUrl: './botones-calc.html',
  styleUrl: './botones-calc.scss',
})
export class BotonesCalc {
  @Input() text = ''; 
  
  //hacemos un evento que devulve un numero para que el padre tome el numero del boton
  @Output() buttonClicked = new EventEmitter<void>(); 
  @Output() buttonClickedOperacion = new EventEmitter<void>(); 

  onClick(){
    this.buttonClicked.emit();
  }
  onClickOperacion(){
    this.buttonClickedOperacion.emit();
  }
}
