import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DatosService } from 'src/app/services/datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit, AfterViewInit {
  @ViewChild('segmento') segment: any;

  superHeroes: Observable<any>;
  publisher: string;
  heroes: boolean = false;

  constructor(private datoServices: DatosService) { }

  ngOnInit() {
    this.superHeroes = this.datoServices.getHereos();
    this.heroes = true;
  }

  ngAfterViewInit() {
    this.segment.value = 'todos';
  }

  segmentChanged(event: CustomEvent){
    this.heroes = false;
    setTimeout(() => {
      let valor = event.detail.value;
      if(valor === "todos"){
        this.publisher = "";
      }else{
        this.publisher = valor;
      }
      this.heroes = true;
    }, 3000);
  }
}
