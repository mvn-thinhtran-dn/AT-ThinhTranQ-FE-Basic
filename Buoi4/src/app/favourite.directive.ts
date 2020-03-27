import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFavourite]'
})
export class FavouriteDirective {

  @Input() data : any;
  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(el : any) {
    if (el.nodeName === 'I') {
      this.data.isClick = !this.data.isClick;
      this.data.isClick ? this.data.count += 1 : this.data.count -= 1;
    }
  }

}
