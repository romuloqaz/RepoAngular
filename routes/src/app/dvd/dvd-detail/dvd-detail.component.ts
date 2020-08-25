import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("index: ", this.route.snapshot.paramMap.get('index')); //parametro fixo

    this.route.paramMap
      .subscribe((params: ParamMap) => console.log("index", params.get('index'))) // parametro avisado quando mudanças

  }

}
