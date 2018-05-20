import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navBgColor = 'bg-info';

  constructor() {}

  ngOnInit() {}

  changeColor(value){
    console.log('changing color: ', typeof value);
    this.navBgColor = value;
  }

  setActive(e){
    console.log('event here: ', e);
  }
}
