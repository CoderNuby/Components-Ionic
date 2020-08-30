import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasModel } from '../interfaces/rutas.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getUsuarios(){
    this.url += "/users";
    return this.http.get(this.url);
  }

  getInicio(){
    return this.http.get<RutasModel[]>("/assets/data/inicio.json");
  }

  getMenu(){
    return this.http.get<RutasModel[]>("/assets/data/menu.json");
  }

  getHereos(){
    return this.http.get("/assets/data/superheroes.json");
  }

  getAlbumes(){
    this.url += "/albums";
    return this.http.get<any[]>(this.url);
  }
}
