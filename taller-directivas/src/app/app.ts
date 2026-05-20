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
}
