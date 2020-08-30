import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {



  titulo: string = "Alert";


  constructor(public alertController: AlertController) {}

  ngOnInit(){
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nombre',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            console.log('Confirm Cancel', cancel);
          }
        }, {
          text: 'Ok',
          handler: (ok) => {
            if(ok.nombre) this.titulo = ok.nombre;
          }
        }
      ]
    });

    await alert.present();
  }
}
