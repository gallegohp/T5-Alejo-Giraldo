import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  standalone: false,
  templateUrl: './resultado.html',
  styleUrl: './resultado.scss',
})
export class Resultado {
  display = '0';
  primerNumero = '';
  operador = '';
  esperandoSegundo = false;
  mostrarError = false;

  agregarNumero(num: string) {
    if (this.mostrarError) {
      this.display = num;
      this.mostrarError = false;
      return;
    }

    if (this.esperandoSegundo) {
      this.display = num;
      this.esperandoSegundo = false;
    } else {
      this.display = this.display === '0' ? num : this.display + num;
    }
  }

  elegirOperacion(op: string) {
    if (this.primerNumero !== '' && !this.esperandoSegundo) {
      this.calcular();
    }
    this.operador = op;
    this.primerNumero = this.display;
    this.esperandoSegundo = true;
  }

  calcular() {
    if (this.primerNumero === '' || this.operador === '') {
      return;
    }

    const num1 = parseFloat(this.primerNumero);
    const num2 = parseFloat(this.display);
    let resultado: number;

    switch (this.operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case 'X':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          this.display = 'Error: división por 0';
          this.mostrarError = true;
          this.primerNumero = '';
          this.operador = '';
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        return;
    }

    this.display = resultado.toString();
    this.primerNumero = '';
    this.operador = '';
  }

  limpiar() {
    this.display = '0';
    this.primerNumero = '';
    this.operador = '';
    this.esperandoSegundo = false;
    this.mostrarError = false;
  }
}
