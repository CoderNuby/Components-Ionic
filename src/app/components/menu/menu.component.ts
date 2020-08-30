import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Observable } from 'rxjs';
import { RutasModel } from 'src/app/interfaces/rutas.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<RutasModel[]>;

  constructor(private datoService: DatosService) { }

  ngOnInit() {
    this.componentes = this.datoService.getMenu();
  }

}
