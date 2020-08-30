import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {


  datos = [
    {
      nombre: "primary",
      selected: false
    },
    {
      nombre: "secondary",
      selected: false
    },
    {
      nombre: "tertiary",
      selected: false
    },
    {
      nombre: "success",
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onclick(valor: boolean){
    console.log("Valor:  ", valor);
  }

}
