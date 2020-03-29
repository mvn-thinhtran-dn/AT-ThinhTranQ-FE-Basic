import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  public arrLocal = new Observable<string[]>();
  public arrSession = new Observable<string[]>();
  constructor() { }

  saveLocalStorage(arr: string[]) {
    localStorage.setItem('arrLocalDes', JSON.stringify(arr));
  }

  getLocalStorage() : Observable<string[]> {
    return this.arrLocal = JSON.parse(localStorage.getItem('arrLocalDes'));
  }

  saveSessionStorage(arr: string[]) {
    sessionStorage.setItem('arrSessionDes', JSON.stringify(arr));
  }

  getSessionStorage() : Observable<string[]>{
    return this.arrSession = JSON.parse(sessionStorage.getItem('arrSessionDes'));
  }
}
