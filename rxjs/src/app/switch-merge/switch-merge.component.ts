import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

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
    this.firstOption()
  }

  filterPeople(searchInput: string): Observable<Person[]> {
    if(searchInput.length===0)
      return of([]);
    return this.http.get<Person[]>(`${this.url}/${searchInput}`);
  }


  firstOption(){
    fromEvent(this.el.nativeElement, 'keyup',)
      .subscribe(e =>{
        this.filterPeople(this.searchInput)
          .subscribe(r => console.log(r))
      })
  }

}
