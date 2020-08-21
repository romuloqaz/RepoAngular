import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  simpleReqProductsObs$: Observable<Product[]>;

  constructor (
    private productService: ProductsService){}
    
    ngOnInit(){
      
    }

    getSimpleHttpRequest(){
      this.simpleReqProductsObs$ = this.productService.getProducts();
    }
}
