import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "John";
  age = 100;

  person = {
    firstName: "John",
    lastName: "bro",
    age: 50,
    address: "route 100"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
