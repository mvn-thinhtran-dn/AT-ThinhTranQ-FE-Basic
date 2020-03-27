import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFavourite]'
})
export class FavouriteDirective {

  @Input() count : any;
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onclick(el : any) {
    if (el.nodename === 'I') {
      el.style.color = 'red';
    }
    console.log(el);
  }


}
