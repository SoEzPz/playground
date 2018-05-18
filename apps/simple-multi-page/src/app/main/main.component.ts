import { Component, OnInit } from '@angular/core';
import { TextService } from '@playground/random-text';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  randomTxt = null;
  randomHeaderOne = null;

  constructor(txt: TextService) {
    txt.get('p-5/20-28').subscribe((res: any) => {
      console.log('response: ', res)
      this.randomTxt = res.text_out
    });
    txt.get('h1/2-3').subscribe((res: any) => {
      console.log('response: ', res)
      this.randomHeaderOne = res.text_out
    });
  }

  ngOnInit() {}
}
