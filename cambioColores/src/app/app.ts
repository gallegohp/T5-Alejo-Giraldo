import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  color = 'FFFFFF';

  tiposColor : {nombre: string, color: string}[] = [
    {nombre: 'Rojo', color: '#F54927'},
    {nombre: 'Azul', color: '#1E90FF'},
    {nombre: 'Verde', color: '#32CD32'},
    {nombre: 'Morado', color: '#800080'},
  ];

  cambiarColor(colorBotton: string){
    this.color = colorBotton;
  }

}
