import { Injectable } from '@angular/core';
import { timer, Observable, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Eletronic } from '../models/eletronic';

@Injectable({
  providedIn: 'root'
})
export class EletronicService {

  private eletronicSubject$: BehaviorSubject<Eletronic[]> = new BehaviorSubject<Eletronic[]>([]);
  public eletronic$ = this.eletronicSubject$.asObservable();

  constructor() { 
    timer(2000)
      .subscribe( () => {
        this.eletronicSubject$.next([
          { name: "Headphone", brand: "Bose", price: 200, description: "Noise canceling" },
          { name: "Portabe hd", brand: "Samsung", price: 100, description: "2Tb hard disk" },
          { name: "Monitor 23", brand: "AOC", price: 200, description: "hdmi/vga" },        
          { name: "processador 17 1686k", brand: "Intel", price: 400, description: "12 mb cache" },
          { name: "Mouse wireless", brand: "Logtech", price: 50, description: "for games" },
        ])
      })
  }


  add(b: Eletronic) {
    this.eletronicSubject$.getValue().push(b);
  }

  remove(i: number) {
    let dvds = this.eletronicSubject$.getValue();
    if (i>=0 && i<dvds.length)
      dvds.splice(i,1);
  }

  get(i: number): Observable<Eletronic> {
    return this.eletronic$.pipe(
      map(eletronics => (i>=0 && i<eletronics.length) ? eletronics[i] : null),
      delay(1000)
    )
  }  
}
