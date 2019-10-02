import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    document.getElementById('btnStartLife').addEventListener('click', () => {
        console.log(new Date().toUTCString(), '==> Prepare the life of the pokemon');
        setTimeout(() => {
            console.log(new Date().toUTCString(), '==> Start the life!');
            var birthdays = setInterval(() => {
                console.log(new Date().toUTCString(), '==> Ethernal Birthday');
            }, 1000);
        }, 3000);
    });

  }
}
