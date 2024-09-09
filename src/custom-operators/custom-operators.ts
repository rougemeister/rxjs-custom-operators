import { Observable } from 'rxjs';



export function multiplyBy(factor: number) {
  return (source$: Observable<any>) => {
    return new Observable(observer => {
      return source$.subscribe({
        next(value) {
          if (typeof value === 'number') {
            observer.next(value * factor);
          } else {
            observer.next(value); 
          }
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        }
      });
    });
  };
}
