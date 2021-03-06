import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'criteria'
})
export class CriteriaPipe implements PipeTransform {
  transform(value, key: string, term: string): string {
    if(value) {
      return value.filter((item) => {
        if (item.hasOwnProperty(key)) {
          if (term && term.length > 0) {
            return term.indexOf(item[key]) !== -1;
          } else {
            return true;
          }
        } else {
          return false;
        }
      });
    } else{
      return '';
    }
  }
}