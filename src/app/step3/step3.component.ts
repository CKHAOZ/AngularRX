import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor() { }

  ngOnInit() {

    // CREATE OBSERVABLES, this is only a definition
    const birthday$ = interval(1000);
    const prepareLife$ = fromEvent(document.getElementById('btnPrepareLife'), 'click');

    // LIFE OF OBSERVABLES, this run a "instance" of a stream
    birthday$.subscribe((value) => console.log(new Date().toUTCString(), '==> Birtday!', value));
    prepareLife$.subscribe((value)=> console.log(new Date().toUTCString(), '==> Prepare the life', value));

  }

}
