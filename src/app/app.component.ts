import { Component } from '@angular/core';

import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productArray: Product[] = [
    { id: 1, name: "pepper", description: "pepper with wooden mill"},
    { id: 2, name: "sea salt", description: "sea ​​salt of Colima Mexico"},
    { id: 3, name: "wheat flour", description: "whole wheat flour"},
    { id: 4, name: "milk", description: "semi-skimmed milk"},
    { id: 5, name: "almonds", description: "peeled almonds"}
  ];

  selectedProduct: Product =  new Product();

  openForEdit(product: Product) {
    this.selectedProduct = product;
  }

  addOrEdit() {
    if(this.selectedProduct.id === 0) {
      this.selectedProduct.id = this.productArray.length + 1;
      this.productArray.push(this.selectedProduct);
    }
    this.selectedProduct = new Product();
  }

  delete() {
    if(confirm('Confirm to delete the product')) {
      this.productArray = this.productArray.filter(elem => elem != this.selectedProduct);
      this.selectedProduct = new Product();
    }
  }

}
