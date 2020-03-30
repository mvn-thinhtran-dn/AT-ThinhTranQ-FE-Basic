import { Component } from '@angular/core';
import { LocalerService } from './core/service/localer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Session5';

  resultLocal : object;
  resultSession : object;
  inputDescription : string;

  // list of arrProduct
  arrProduct: any[] = [
    {
      title: 'SamSung Galaxy Note 10 Plus',
      img: 'ssnote10.png',
      description:'Chiếc điện thoại cao cấp nhất, màn hình lớn nhất, mang trên mình sức mạnh đáng kinh ngạc.'
    },
    {
      title: 'Iphone XS Max',
      img: 'ipxsmax.png',
      description:'IPhone Xs Max 256GB là chiếc iPhone có màn hình lớn nhất, bộ nhớ trong dồi dào, mang trên mình những công nghệ đỉnh cao hoàn hảo.'
    },
    {
      title: 'Iphone 11 Pro Max',
      img: 'ip11.png',
      description: 'IPhone 11 Pro Max 512GB là phiên bản có bộ nhớ nhiều nhất, màn hình lớn nhất và thời lượng pin tuyệt vời nhất hiện nay. Bạn sẽ được cầm trên tay chiếc điện thoại đẳng cấp mà bất cứ ai cũng mơ ước.'
    }
  ]

  constructor (private localerService: LocalerService){}

  setLocal(description: string) {
    if (description === '') {
      alert('Input description!');
    } else {
      let newArr = [description];
      this.localerService.saveLocalStorage(newArr);
      this.inputDescription = '';
    }
  }

  getLocal() {
    this.resultLocal = this.localerService.getLocalStorage();
  }

  setSession(description: string) {
    if (description === '') {
      alert('Input description!');
    } else {
      let newArr = [description];
      this.localerService.saveSessionStorage(newArr);
      this.inputDescription = '';
    }
  }

  getSession() {
    this.resultSession = this.localerService.getSessionStorage();
  }
}
