import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlelimit'
})
export class TitlelimitPipe implements PipeTransform {

  transform(limitCharecter: string): string {
    const chaLimit = 3;
    const charecter = 15;
    let maskedSection = limitCharecter.slice(0, chaLimit);
    let visibleSection = limitCharecter.slice(0,charecter);
    return visibleSection + ' ' + maskedSection.replace(/./g, '.');
  }
}
