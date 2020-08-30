import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  usuarios: any[];

  constructor(private userServices: DatosService) { }

  ngOnInit() {
    this.userServices.getUsuarios().subscribe((res: any)=> {
      this.usuarios = res;
    });
  }

  ordenar(evento: CustomEvent){
    console.log("Evento: ", evento);
    evento.detail.complete();
  }
}
