import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productsList : Product[] = [];
  productForm! : FormGroup; 
 
  constructor(private productService : ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data : Product[])=>{

      this.productsList = data;
      console.log("Products list: " + JSON.stringify(this.productsList));
      
    })
  }

  deleteProduct(id:any){

    this.productService.deleteProduct(id).subscribe(data => {
      
      this.productsList = this.productsList.filter(product => product.id !== id);
      console.log("The product with id " + id + " has been deleted.");
       window.location.reload();
      // this.router.navigate([this.router.url]);
      
    })
  }

  
}
