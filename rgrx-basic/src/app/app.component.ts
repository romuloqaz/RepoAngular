import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';
import * as faker from 'faker';
import { Store, select } from '@ngrx/store';
import { AppState, selectPeople, selectPeopleCount } from './store';
import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people$: Observable<Person[]>

  ngOnInit(){
    this.store.dispatch(new PersonAll());
    // this.people$ = this.store.pipe(select('people'));
    this.people$ = this.store.select(selectPeople);
    this.store.select(selectPeopleCount)
      .subscribe( n => console.log(n))
  }

  constructor(
    private store: Store<AppState>
    ){}

  addNew(){
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round( Math.random()*100),
      _id: new Date().getMilliseconds().toString()
    };
    this.store.dispatch(new PersonNew({person}));
  }

  update(p: Person) {
    const person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100)
    };
    this.store.dispatch(new PersonUpdate({ person: { ...p, ...person } }));
  }

  delete(p:Person){
    this.store.dispatch( new PersonDelete({id: p._id}))
  }
}
