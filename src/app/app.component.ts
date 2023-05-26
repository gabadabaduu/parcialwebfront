import { Component } from '@angular/core';
import { libros } from './modelo/libros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcialwebfront';
  item: any;

  items = ['Campin', 'Santiago Bernabeu', ' Ciudad Vinotinto', 'Buenos Aires'];

  submitted = true;

  addItem(newItem: string) {
    this.items.push(newItem);
    this.addItem('Elemento 1');
    this.addItem('Elemento 2');
  }

  onSubmit(){
  
  }

libros = ['libro1', 'libro2' , 'libro3'];

model = new libros('', 'Nombre de la Cancha', 'Equipo 1',0 , 'ubicacion');

newSubmit() {
  this.model = new libros('Titulo', 'Referencia', 'autor', 1, 'ubicacion');
}
}
