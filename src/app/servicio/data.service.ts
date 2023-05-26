import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { libros } from '../modelo/libros';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/Libros';

  constructor(private http: HttpClient) { }

  getData() {
    const url = this.apiUrl;
    return this.http.get(url);
  }
    crearLibro(Titulo: string, referencias: string, autor: string, Precio: number, ubicacion: string) {
      const url = this.apiUrl;
      const body = {
        Titulo: Titulo,
        referencia: referencias,
        autor: autor,
        Precio: Precio
      };
    
      return this.http.post(url, body);
  }

}
