import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    
    // CREATE OBSERVABLES, this is only a definition
    const death$ = timer(5000);
    const birthday$ = interval(1000);
    const lifeOfPokemon$ = birthday$.pipe(takeUntil(death$));
    const prepareLife$ = fromEvent(document.getElementById('btnPrepareLife'), 'click');

    // LIFE OF OBSERVABLES, this run a "instance" of a stream
    prepareLife$.subscribe((value)=> {
        console.log(new Date().toUTCString(), '==> Prepare the life', value);
        lifeOfPokemon$.subscribe((value) => {
            console.log(new Date().toUTCString(), '==> Birtday!', value);
        });
    });

  }

}
