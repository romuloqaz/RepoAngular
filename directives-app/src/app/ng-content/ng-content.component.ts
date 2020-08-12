import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {

  like = 0;

  constructor() { }

  ngOnInit(): void {
  }

  liker(){
    this.like+=1
  }
}
