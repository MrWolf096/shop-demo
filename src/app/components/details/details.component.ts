import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id!: number;
  product!: Product;

  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['productId'];

    this.productService.getProductDetailsById(this.id).subscribe((data:Product)=>{
      this.product = data;
      console.log("Products list: " + JSON.stringify(this.product));
    })
  }

}
