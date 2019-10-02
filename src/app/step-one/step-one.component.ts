import { Component, OnInit } from '@angular/core';

import { interval, fromEvent, timer } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  private life;
  private lifeObservable$;
  private clickObservable$;
  private birthdayObservable$;
  private deathObservable$;

  constructor() { }

  ngOnInit() {
    
    // 1 - Una unica vez
    // this.startLife();

    this.deathObservable$ = timer(9000);

    this.birthdayObservable$ = timer(2000, 1000).pipe(
      takeUntil(this.deathObservable$)
    );

    this.clickObservable$ = fromEvent(document.getElementById('btnWaitAndStartLife'), 'click');

    this.lifeObservable$ = interval(1000);
        
    this.clickObservable$.subscribe((event: MouseEvent) => {
      
      this.startLife();
      
      this.birthdayObservable$.subscribe((value: number) => {
        console.log(new Date().toUTCString(), value, 'Happy Birthday');
      },
      (error) => {
        console.log('error')
      },
      () => {
        console.log('complete');
      });

    });


    // document.getElementById('btnWaitAndStartLife').addEventListener('click', ()=> {
      
    //   this.startLife();

    //   setTimeout(() => {
        
    //     // 2 - Ciclico
    //     this.happyBirthday();

    //     // 3 - Finaliza
    //     this.deathLife();
        
    //   }, 1000); // 3000 before

    // });
  }

  // Methods

  startLife() {
    console.log(new Date().toUTCString(), 'Start the life');
  }

  happyBirthday() {
    // this.life = setInterval(() => {
    //   console.log(new Date().toUTCString(), 'Happy Birthday');
    // }, 1000);
  }

  deathLife() {
    // setTimeout(()=> {
    //   console.log(new Date().toUTCString(), 'Death');
    //   clearInterval(this.life);
    // }, 5000);
  }

}
