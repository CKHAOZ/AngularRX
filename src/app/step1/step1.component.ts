import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    //console.log(new Date().toUTCString(), '==> Start the life of the pokemon');
    
    setTimeout(() => {
        console.log(new Date().toUTCString(), '==> Death and that´s it!');
        clearInterval(birthdays)
    }, 3000);


    var birthdays = setInterval(() => {
        console.log(new Date().toUTCString(), '==> Birthday');
    }, 1000);    

    document.getElementById('btnStartLife').addEventListener('click', () => {
        console.log(new Date().toUTCString(), '==> Start the life of the pokemon');
    });

  }

}
