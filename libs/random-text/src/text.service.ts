import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TextService {

  URL = "http://www.randomtext.me/api/lorem/";

  constructor(private http: HttpClient){}

  get(requestString: string){
    return this.http.get(`${this.URL}${requestString}`);
  }
}
