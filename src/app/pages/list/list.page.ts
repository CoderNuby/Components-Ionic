import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista')lista: IonList;

  usuarios: Observable<any>;

  constructor(
    private usuarioServices: DatosService,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    this.usuarios = this.usuarioServices.getUsuarios();
  }

  async presentToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 4000
    });
    toast.present();
  }

  favorito(usuario: any){
    this.presentToast("Guardado en favoritos...");
    this.lista.closeSlidingItems();
  }

  compartir(usuario: any){
    this.presentToast("Compartiendo...");
    this.lista.closeSlidingItems();
  }

  borrar(usuario: any){
    this.presentToast("Borrando...");
    this.lista.closeSlidingItems();
  }
}
