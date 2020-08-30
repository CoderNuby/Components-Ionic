import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, dato: string): any[] {
    if(texto){
      return arreglo.filter(p => {
        return p[dato].includes(texto);
      });
    }
    return arreglo;
  }
}
