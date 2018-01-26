import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarListaCervezas'
})
export class FiltrarListaCervezasPipe implements PipeTransform {
  transform(value: any, term: any): any {
    return value.filter(item => {
      if (term) {
        let regexp = new RegExp("\\b" + term, "gi");
        return regexp.test(item.nombre);
      } else {
        return true;
      }
    });
  }

}
