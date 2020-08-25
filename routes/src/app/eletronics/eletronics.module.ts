import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './eletronics-routing.module';
import { EletronicListComponent } from './eletronic-list/eletronic-list.component';
import { EletronicDetailComponent } from './eletronic-list/eletronic-detail/eletronic-detail.component';


@NgModule({
  declarations: [EletronicListComponent, EletronicDetailComponent],
  imports: [
    CommonModule,
    ElectronicsRoutingModule
  ]
})
export class EletronicsModule { }
