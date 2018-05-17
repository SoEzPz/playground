import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TextService {

  constructor(private http: HttpClient){
    // console.log("hello from text service",
  }

  get(options){
    return this.http.get('http://www.randomtext.me/api/lorem/p-5/20-35');
  }

}
