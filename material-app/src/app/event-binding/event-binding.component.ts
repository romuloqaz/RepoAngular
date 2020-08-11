import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My button";
  i = 0;
  constructor() { }
  spinnerMode = "determinate";
  btnEnable = true;

  ngOnInit(): void {
  }

  save(){
    console.log("save")
    this.i = 0;
  }
  inc(){
    this.i++;
    this.buttonName = `It was clicked ${this.i} times`;
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    } , 3000 );
  }


}