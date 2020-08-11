import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

name1: string="123";
name2: string="456"
name3: string= this.name1 + this.name2 + "789";

client = {
  firstName: "John",
  lastName: "Doe",
  address: "",
  age: 0
}

  constructor() { }

  ngOnInit(): void {
  }

}
