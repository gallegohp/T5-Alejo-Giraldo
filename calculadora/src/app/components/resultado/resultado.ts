import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resultado',
  standalone: false,
  templateUrl: './resultado.html',
  styleUrl: './resultado.scss',
})
export class Resultado {
  numero = '';
  cadena = "";
  operacion : string[] = ['+' , 'X' , '/', '-']

  leerNumero(numero : string){
    this.operacion.forEach((str: string) => {
      if (str !== numero){
        console.log('es un numero')
      }
    });
    this.numero = this.numero + numero;
    console.log(this.numero);
  }
  leerOperacion(str: string){
    console.log(str)
  }
//  leerNumero(str : string){
//   if(!this.operacion.includes(this.numero)){
//     this.numero = this.numero + str;
//   }else {
//     this.cadena = this.numero;
//     this.numero = this.numero = "";

//   }
//  }


}
