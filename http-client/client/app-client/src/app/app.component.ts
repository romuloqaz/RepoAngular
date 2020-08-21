import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './Product.model';
import { MatSnackBar, MatSnackBarConfig, } from '@angular/material/snack-bar';

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
  productsIds: Product[];  
  newlyProducts : Product[] = [];
  productsToDelete: Product[];
  productsToEdit: Product[];

  constructor(
    private productsService: ProductsService,
    private snackBar: MatSnackBar,) {}
  
  ngOnInit() {
  }

  getSimpleHttpRequest() {
    this.simpleReqProductsObs$ = this.productsService.getProducts();
  }

  getProductsWithErrorHandling() {
    this.productsService.getProductsError()
      .subscribe(
        (prods) => { this.productsErrorHandling = prods; },
        (err) => {
          console.log(err);
          console.log("Message: " + err.error.msg);
          console.log("Status code: " + err.status);
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack_err'];

          if (err.status == 0)
            this.snackBar.open('Could not connect to the server', '', config);
          else
            this.snackBar.open(err.error.msg, '', config);
        }
      )
  }

  getProductsWithErrorHandlingOK(){
    this.productsService.getProductsDelay()
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
    this.productsService.getProductsDelay()
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

  getProductsIds() {
    this.productsService.getProductsIds()
      .subscribe((ids) => {
        this.productsIds = ids.map(id => ({_id: id, name: '', department: '', price: 0}));
      })
  }

  loadName(id: string) {
    this.productsService.getProductName(id)
      .subscribe( (name => {
        let index = this.productsIds.findIndex(p=>p._id===id);
        if (index >= 0) {
          this.productsIds[index].name = name;
        }
      }));
  }
}