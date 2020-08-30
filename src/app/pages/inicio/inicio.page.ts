import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { RutasModel } from 'src/app/interfaces/rutas.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<RutasModel[]>;

  constructor(private datoService: DatosService) { }

  ngOnInit() {
    this.componentes = this.datoService.getInicio();
  }

}
