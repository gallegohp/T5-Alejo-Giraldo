import { Component, signal } from '@angular/core';

type Estado = 'pendiente' | 'cargando' | 'listo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  estado : Estado = 'pendiente';

  users : { name : String }[] = [
    {name : 'Camilo'},
    {name : 'Mike wuasauski'},
    {name : 'jijiuuu'},
    {name : 'Jesse Pinkman'},
    {name : 'Gustado Fring'},
  ];

  estadoBoton() : string {
    return this.estado === 'listo' ? 'borrar' : 'cargar'
  }

  presionarBoton() : void {
    if (this.estado === 'listo') {
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
      this.estado = 'listo';
    }, 2000);
  }

  borrar() : void {
      this.estado = 'pendiente';
    }
  }

