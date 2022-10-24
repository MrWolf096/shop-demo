import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({

      name: new FormControl('', [Validators.required]),
   
      description: new FormControl('', [Validators.required]),

      price: new FormControl('', [Validators.required]),

      category: new FormControl('', [Validators.required]),

      imagePath: new FormControl('', [Validators.required])

    });
  }
  submitForm(){
    console.log("Input value: " + JSON.stringify(this.productForm.value));
    
    this.productService.addProduct(this.productForm.value).subscribe(data=>{
      console.log("Product created successufully.");
      this.router.navigateByUrl("/admin")
    })
  }
  

}
