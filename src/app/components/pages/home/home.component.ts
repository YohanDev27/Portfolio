import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeSevenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendMail() :void {
    var name = document.getElementById('name');
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var message = (<HTMLInputElement>document.getElementById('message')).value;

    document.location.href = "mailto:Yohanbrau.pro@gmail.com?subject=Portfolio - Yohan Brau"
    + "&body=" + encodeURIComponent(message)+" sended by "+encodeURIComponent(email);
  }

  
}
