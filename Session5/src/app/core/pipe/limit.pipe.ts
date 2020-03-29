import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(limitCharecter: string): string {
    const chaLimit = 3;
    const charecter = 100;
    let maskedSection = limitCharecter.slice(0, chaLimit);
    let visibleSection = limitCharecter.slice(0,charecter);
    return visibleSection + ' ' + maskedSection.replace(/./g, '.');
  }
}
