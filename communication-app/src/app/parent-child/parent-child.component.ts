import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // @ViewChild("stopwatch2")pegar componentes dentro da template e injetar a instancia dentro da classe
  @ViewChild(TimerComponent)
  private mytimer: TimerComponent;

  @ViewChild("myP")
  private myp: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.mytimer.start();
  }

  stop(){
    this.mytimer.stop();
  }

  clear(){
    this.mytimer.clear();
  }

  ngAfterViewInit(){
    //inicializado após todos os componentes serem renderizados
    console.log(this.myp);
  }

}
