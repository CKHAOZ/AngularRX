import { Component, OnInit } from "@angular/core";
import { Observable, fromEvent } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { mergeMap } from "rxjs/operators";

@Component({
    selector: "app-step5",
    templateUrl: "./step5.component.html",
    styleUrls: ["./step5.component.css"]
})

export class Step5Component implements OnInit {
    constructor() { }

    ngOnInit() {
        // Define the observables
        const requestCreatePokemon$ = this.createHTTPPostObservable({
            name: 'Tóguepi'
        });
        const clickCreatePokemon$ = fromEvent(document.getElementById('btnCreatePokemon'), 'click');
        const app$ = clickCreatePokemon$.pipe(
            mergeMap(() => requestCreatePokemon$)
        );

        // Subscribe
        app$.subscribe();

    }

    createHTTPPostObservable(params: any) {
        return Observable.create((observer) => {
            fetch(`api/pokemon`, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response: Response) => {
                return response.body;
            }).then((body) => {
                observer.next(body);
                observer.complete();
            }).catch(error => {
                observer.error(error);
            });
        })
    }
}
