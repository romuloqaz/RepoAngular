import { Component, OnInit } from '@angular/core';
import { Observable, throwError, timer } from 'rxjs';
import { map, tap, catchError, retryWhen, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  startTest() {
    let obj: Observable<any> = new Observable((observer)=>{
      for(let i=0;i<10;i++) {
        if (i==7)
          observer.error(`An error occurred when i = ${i}`);
        else
          observer.next(i);
      }
    });
    obj
      .pipe(
        map(i=>i*10),
        tap(i=>console.log('Before error handling: ' + i)),
        catchError(error => {
          console.error('Inside catchError: ', error);
          //return of(0); retorna -0 no lugar do erro
          return throwError('throwError: Error'); // gera erro a partit do pipe
        }),
        //retry(2), // tente novamente msm com o erro 
        retryWhen(i => timer(5000)) //quando q deve tentar o erro novamente
      )
      /*
      .subscribe(
        i => console.log('Normal output: ' + i),
        err => console.log(err),
        () => console.log('Completed!')
      );*/

    let obj2: Observable<any> = new Observable((observer) => {
      timer(2000).subscribe((n) => observer.next(1000));
      timer(2500).subscribe((n) => observer.complete());
    });
    obj2
    .pipe(
      timeout(2400)
    )
    .subscribe(
      i => console.log('N: ' + i),
      err => console.log(err),
      () => console.log('Completed!')
    )
    
  }

}
