import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(limitCharecter: string, chaLimit: number, charecter: number): string {
    let maskedSection = limitCharecter.slice(0, chaLimit);
    let visibleSection = limitCharecter.slice(0,charecter);
    if (limitCharecter.length < charecter) {
      return limitCharecter;
    } else {
      return visibleSection + ' ' + maskedSection.replace(/./g, '.');
    }
  }
}
