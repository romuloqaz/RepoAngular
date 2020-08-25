import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.booksSubject$.asObservable();

  constructor() { 
    timer(2000)
      .subscribe(()=> this.booksSubject$.next([
        {title: "Book 1", pages: 200, authors: ["Jonh", "nicole"]},
        {title: "Book 2", pages: 100, authors: ["Milly"]},
        {title: "Book 3", pages: 300, authors: ["Fred"]},
        {title: "Book 4", pages: 230, authors: ["anne", "peter0", "samuel"]},
        {title: "Book 5", pages: 130, authors: ["Jonh", "Paul"]},
      ]))
  }

  add(b: Book){
    this.booksSubject$.getValue().push(b);
  }

  remove(i: number){
    let books = this.booksSubject$.getValue();
    if(i>=0 && i<books.length){
      books.splice(i,1);
    }
  }

  get(i: number): Observable<Book>{
    return this.books$.pipe(
      map(books =>(i>=0 && i<books.length) ? books[i]: null),
      delay(1000)
    )
  }
}
