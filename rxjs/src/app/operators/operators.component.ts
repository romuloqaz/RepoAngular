import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Subscription } from 'rxjs';
import { map, delay, filter, tap, take, first, last } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mapClick(){
    from([1,2,3,4,5,6,7])
    .pipe(
      map(i =>i*2),
      map(i => i*10),
      delay(1000)
    )
    .subscribe(i => console.log(i));

    fromEvent(document, 'click')
      .pipe(
        map((e: MouseEvent) => ({x: e.screenX, y: e.screenY}))
      )
      .subscribe((pos) => console.log(pos)); 
  }

  filterClick(){
    from([1,2,3,4,5,6,7])
    .pipe(
      filter(i => i%2==1)
    )
    .subscribe(i => console.log(i));
    interval(1000)
    .pipe(
      filter(i => i%2==0),
      map(i => "value: " +i),
      delay(1000))
    .subscribe(i=> console.log(i))
  }

  tapClick(){
    interval(1000)
    .pipe(
      tap(i => console.log('')),
      tap(i => console.warn('Before filtering: ', i)),
      filter(i => i%2==0),
      tap(i => console.warn('after filtering: ', i)),
      map(i => "value: " +i),
      tap(i => console.warn('after map: ', i)),
      delay(1000))
    .subscribe(i=> console.log(i))
  }

  takeClick(){
    const observable = new Observable((observer) => {
      let i;
      for(i=0; i<20; i++)
        setTimeout(() => observer.next(Math.floor(Math.random()*100)), i*100);
        setTimeout(()=> observer.complete(), i*100);
    });

    const s: Subscription = observable
      .pipe(
        tap(i=> console.log(i)),
        //take(10) // ja faz o onsubscrbe o take
        //first() //pega o primeiro e faz o subscribe
        //last() // gera todos os eventos e fas o subscribe apos o ultimo
      )
      .subscribe(v=> console.log('output: ', v),
      (error)=> console.log(error),
      () => console.log('Complete!')
      );

    const interv = setInterval(()=> {
      console.log('Cheking...');
      if(s.closed){
        console.warn('Subscription CLOSEd');
        clearInterval(interv);
      }
    }, 200)
  }
}
