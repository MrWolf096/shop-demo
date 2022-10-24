import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  private apiUrl = "http://localhost:4200/server/api";

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/JSON'
    })
  }

  constructor(private httpClient:HttpClient) {  }

  getAllProducts():Observable<Product[]>{ 
    return this.httpClient.get<Product[]>(this.apiUrl + '/products');
  }

  getProductDetailsById(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.apiUrl + "/product/" + id);
  }

  addProduct(product1:any):Observable<Product>{
    return this.httpClient.post<Product>(this.apiUrl + "/createProduct", JSON.stringify(product1), this.httpOptions);
  }

  deleteProduct(id:any){
    return this.httpClient.delete<Product>(this.apiUrl + "/deleteProduct/" + id, this.httpOptions);
  }

  editProduct(id:any,product:any):Observable<Product>{
    return this.httpClient.put<Product>(this.apiUrl + "/editProductFound/" + id,JSON.stringify(product), this.httpOptions);
  }
}

