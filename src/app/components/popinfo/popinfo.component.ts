import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items: any = Array(4);

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  selectedItem(value: number){
    this.popoverController.dismiss({
      item: value
    });
  }
}
