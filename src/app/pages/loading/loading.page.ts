import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingController: LoadingController) {}

  ngOnInit(){
    //this.presentLoading();
    this.presentLoading("Cargando usuarios...");
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 2000);
  }

  async presentLoading(mensaje: string = "Please wait...") {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
