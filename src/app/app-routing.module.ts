import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailsComponent } from './components/details/details.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path:"products",
    component:ProductsComponent
  },

  {
    path:"orders",
    component:OrdersComponent
  },
  {
    path:"aboutUs",
    component:AboutUsComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"details/:productId",
    component:DetailsComponent
  },
  {
    path:"addProduct",
    component:AddProductComponent
  },
  {
    path:"editProduct/:productId",
    component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
