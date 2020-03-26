import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() Number : number;
  @Output() onHandleStep = new EventEmitter<number>();

  arrContent = [
    {
      number: 1,
      title: 'TABBED',
      img: ''
    },
    {
      number: 2,
      title: 'HTML5',
      img: 'html5.jpeg'
    },
    {
      number: 3,
      title: 'CSS3',
      img: 'css3.png'
    },
    {
      number: 4,
      title: 'LIGHT',
      img: ''
    }
  ]

  constructor() { }

  getIsStep() {
    this.Number = 1;
    this.onHandleStep.emit(this.Number);
  }

  ngOnInit(): void {
  }

}
