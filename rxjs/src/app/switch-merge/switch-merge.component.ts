import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit, AfterViewInit {

  @ViewChild('searchBy', {static: true}) el: ElementRef;
  searchInput: string = '';
  people$: Observable <Person[]>
  
  constructor(private http: HttpClient) { }

  private readonly url: string = 'http://localhost:9000'

  ngOnInit(): void { }
 
  ngAfterViewInit(): void {
    // this.firstOption()
    this.secondOption();
  }

  filterPeople(searchInput: string): Observable<Person[]> {
    if(searchInput.length===0)
      return of([]);
    return this.http.get<Person[]>(`${this.url}/${searchInput}`);
  }

  secondOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup'); 

    /*
    let fetch$ = keyup$.pipe(map( (e) => this.filterPeople(this.searchInput))) ;
    fetch$
      .pipe(mergeAll())
      .subscribe((data) => console.log(data));
    this.people$ = fetch$.pipe(mergeAll());
    */

   this.people$ = keyup$.pipe(mergeMap( (e) => this.filterPeople(this.searchInput)));
   
  }

  firstOption(){
    fromEvent(this.el.nativeElement, 'keyup',)
      .subscribe(e =>{
        this.filterPeople(this.searchInput)
          .subscribe(r => console.log(r))
      })
  }

}
