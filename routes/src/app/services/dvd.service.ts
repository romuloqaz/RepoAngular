import { Injectable } from '@angular/core';
import { Dvd } from '../models/dvd';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject$.asObservable();



  constructor() { 
    timer(2000)
      .subscribe(()=> this.dvdSubject$.next([
        {title: "DVD - Beegees ", year: 2016, genre: "Music"},
        {title: "The wind ", year: 2018, genre: "Movie"},
        
      ]))
  }

  add(d: Dvd){
    this.dvdSubject$.getValue().push(d);
  }

  remove(i: number){
    let books = this.dvdSubject$.getValue();
    if(i>=0 && i<books.length){
      books.splice(i,1);
    }
  }

  get(i: number): Observable<Dvd>{
    return this.dvds$.pipe(
      map(dvd =>(i>=0 && i<dvd.length) ? dvd[i]: null),
      delay(1000)
    )
  }
}
