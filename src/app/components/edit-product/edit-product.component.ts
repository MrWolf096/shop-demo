import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id! : number;
  product! : Product;
  productForm!: FormGroup;

  constructor(private productService : ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
      this.id = this.route.snapshot.params['productId'];
      
      this.productService.getProductDetailsById(this.id).subscribe((data: Product)=>{
        
        this.product = data;
  
      });
  
      this.productForm = new FormGroup({
  
        name: new FormControl('', [Validators.required]),
     
        description: new FormControl('', [Validators.required]),
  
        price: new FormControl('', [Validators.required]),
  
        category: new FormControl('', [Validators.required]),
  
        imagePath: new FormControl('', [Validators.required])
  
      });
    
  }

  updateForm(){
    console.log("Input value: " + JSON.stringify(this.productForm.value));
    
    this.productService.editProduct(this.id,this.productForm.value).subscribe(data=>{
      console.log("Product edited successufully.");
      this.router.navigateByUrl("/admin")
    })
  }

}
