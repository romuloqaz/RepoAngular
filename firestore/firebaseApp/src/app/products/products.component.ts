import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productForm = this.fb.group({
    id: [undefined],
    name: ['', [Validators.required]],
    stock: [0, [Validators.required]],
    price: [0, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let p: Product = this.productForm.value;

    if(!p.id){
      this.addProduct(p);
    }
    else {
      this.editProduct(p);
    }

  }

  addProduct(p: Product){
    return this.productService.addProduct(p)
      .then(()=> {
        this.snackBar.open('Product add.', 'OK', {duration: 2000})
      })
      .catch(()=> {
        this.snackBar.open('Error on submiting', 'OK', {duration: 2000})
      })
  }

  editProduct(p: Product){

  }

}
