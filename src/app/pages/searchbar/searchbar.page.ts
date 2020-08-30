import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  texto: string = "";


  constructor(private dataServices: DatosService) { }

  ngOnInit() {
    this.dataServices.getAlbumes().subscribe((res: any) => {
      console.log("RESPONSE:: ", res);
      this.albumes = res;
    });
  }

  buscar(event: CustomEvent){
    this.texto = event.detail.value;
  }
}
