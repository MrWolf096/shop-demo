import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList : Product[] = [];
 
  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data : Product[])=>{

      this.productsList = data;
      console.log("Products list: " + JSON.stringify(this.productsList));
      
    })
  }

}
