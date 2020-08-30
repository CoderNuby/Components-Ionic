import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  progress: number = 0.5;

  constructor() { }

  ngOnInit() {
  }

  cambioRango(event: CustomEvent){
    console.log("EVENTO:: ", event.detail.value);
    this.progress = (event.detail.value / 100);
  }
}
