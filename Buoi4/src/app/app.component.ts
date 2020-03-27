import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buoi4';

  arrProduct = [
    {
      id: 1,
      img: '',
      name: 'A',
      count: 20
    },
    {
      id: 2,
      img: '',
      name: 'B',
      count: 10
    },
    {
      id: 3,
      img: '',
      name: 'C',
      count: 15
    },
    {
      id: 4,
      img: '',
      name: 'D',
      count: 8
    },
  ]
}
