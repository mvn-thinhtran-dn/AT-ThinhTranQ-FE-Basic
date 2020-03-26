import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Session3';
  number : number = 1;

  ngOnInit() {
  }

  onclick(e : any) {
    this.number = e;
  }

  onGet(x : number) {
    this.number = x;
  }
}
