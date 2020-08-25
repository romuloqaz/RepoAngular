import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvdComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  {path: 'dvds', component: DvdComponent},
  {path: 'books', component: BookComponent},
  {path: '', pathMatch: 'full', redirectTo: 'dvds'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
