import { Component, OnInit } from '@angular/core';
import { TextService } from '@playground/random-text';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  randomTxt;
  constructor(txt: TextService) {
    txt.get('hello').subscribe((res: any) => {
      console.log('response: ', res)
      this.randomTxt = res.text_out
    });
  }

  ngOnInit() {}
}
