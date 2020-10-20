import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  name = "Quoc Thinh";
  comment = '';
  postComment = [];

  onClick() {
    if(this.comment.trim() === '') {
      return false;
    }
    this.postComment.push({comment:this.comment, id: this.postComment.length});
    this.comment = "";
  }

  onClickDel(id: number) {
    for(let i = 0; i < this.postComment.length; i++) {
      if(this.postComment[i].id === id) {
        this.postComment.splice(i,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
