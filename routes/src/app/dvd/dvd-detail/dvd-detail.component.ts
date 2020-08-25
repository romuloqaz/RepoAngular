import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DvdService } from 'src/app/services/dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>;

  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let index: number = +this.route.snapshot.paramMap.get('index'); // + transforma em um num inteiro
    this.dvd$ = this.dvdService.get(index)

    // console.log("index: ", this.route.snapshot.paramMap.get('index')); //parametro fixo

    // this.route.paramMap
    //   .subscribe((params: ParamMap) => console.log("index", params.get('index'))) // parametro avisado quando mudanças

  }

  goBack(){
    this.router.navigate(['/dvds'])
  }

}
