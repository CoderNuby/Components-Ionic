import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();

  customPickerOption;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOption = {
      buttons: [{
        text: 'Save',
        handler: (res)=> {
          console.log("Save: ", res);
        }
      },{
        text: 'Log',
        handler: ()=> {
          console.log("Clicked log");
          return false;
        }
      }]
    }
  }

  cambiarFecha(cambio: CustomEvent){
    let fecha = new Date(cambio.detail.value);
    console.log("Hola pinche putita: ", fecha);
  }

}
