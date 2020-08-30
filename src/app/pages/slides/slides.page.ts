import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: { color: string, titulo: string, desc: string }[] = [
    {
      color: 'aqua',
      titulo: 'Titulo Test1',
      desc: 'consectetur cum nam sit minima inventore molestias veritatis?'
    },
    {
      color: 'blueviolet',
      titulo: 'Titulo Test2',
      desc: 'corrupti voluptatibus pariatur iusto,'
    },
    {
      color: 'brown',
      titulo: 'Titulo Test3',
      desc: 'Ducimus labore a distinctio eos expedita dolorem minus ad earum,'
    },
    {
      color: 'antiquewhite',
      titulo: 'Titulo Test4',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  comenzar(){
    this.navController.navigateBack("/");
  }
}
