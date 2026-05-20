import { Component, signal } from '@angular/core';

type Estado = 'pendiente' | 'cargando' | 'exito';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  estado : Estado = 'exito';

  users : { name : String }[] = [
    {name : 'Camilo'},
    {name : 'Mike wuasauski'},
    {name : 'jijiuuu'},
    {name : 'Jesse Pinkman'},
    {name : 'Gustado Fring'},
  ];

  estadoBoton() : string {
    return this.estado === 'exito' ? 'borrar' : 'cargar'
  }

  presionarBoton() : void {
    if (this.estado === 'exito') {
      this.borrar();
      return;
    }

    if (this.estado === 'pendiente') {
      this.cargar();
    }
  }

  cargar(): void {
    this.estado = 'cargando';

    setTimeout(() => {
      this.estado = 'exito';
    }, 2000);
  }

  borrar() : void {
      this.estado = 'pendiente';
    }
  }

