import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './Product.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  simpleReqProductsObs$: Observable<Product[]>;
  productsErrorHandling: Product[];
  productsLoading: Product[];
  bLoading : boolean = false;

  constructor (
    private productService: ProductsService,
    private snackBar: MatSnackBar){}
    
    ngOnInit(){
      
    }

    getSimpleHttpRequest(){
      this.simpleReqProductsObs$ = this.productService.getProducts();
    }

    getProductsWithErrorHandling() {
      this.productService.getProductsError()
        .subscribe(
          (prods) => { this.productsErrorHandling = prods; },
          (err) => {
            console.log(err);
            console.log("Message: " + err.error.msg);
            console.log("Status code: " + err.status);
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            config.panelClass = ['snack_error'];
  
            if (err.status == 0)
              this.snackBar.open('Could not connect to the server', '', config);
            else
              this.snackBar.open(err.error.msg, '', config);
          }
        )
    }
    getProductsWithErrorHandlingOK(){
      this.productService.getProductsDelay()
        .subscribe(
          (prods) => { 
            this.productsErrorHandling = prods; 
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            config.panelClass = ['snack_ok'];
            this.snackBar.open('Products successfully loaded!', '', config);
          },
          (err) => {
            console.log(err);
          }
        )
    }
    getProductsLoading() {
      this.bLoading = true;
      this.productService.getProductsDelay()
        .subscribe(
          (prods) => { 
            this.productsLoading = prods; 
            this.bLoading = false;
          },
          (err) => {
            console.log(err);
            this.bLoading = false;
          }
        )    
    }
}
