import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  refresh(event: CustomEvent){
    setTimeout(() => {
      this.items = Array(5);
      event.detail.complete();
    }, 6000);
  }
}
