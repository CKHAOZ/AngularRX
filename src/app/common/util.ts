import { Observable } from 'rxjs';

export function createHttpGetObservable(url: string) : Observable<any>{
    return Observable.create(observer => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url, {signal})
        .then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                observer.error('Request failed with status code: ' + response.status);
            }
        })
        .then(body => {
            observer.next(body);
            observer.complete();
        })
        .catch(error => {
            observer.error(error);
        })

        return () => controller.abort();
    })
}