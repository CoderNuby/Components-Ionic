import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  datos = Array(20);

  constructor() {}
  

  ngOnInit(){
    
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');

      event.target.complete();

      this.datos.push(...Array(20));

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.datos.length == 100) {
        event.target.disabled = true;
      }
      console.log("Desabilitado??? ", this.infiniteScroll.disabled);
    }, 500);
  }

  toggleInfiniteScroll() {
    this.datos = Array(20);
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
