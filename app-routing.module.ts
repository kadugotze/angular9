import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importando os componentes criados
import {HomeComponent} from "./view/home/home.component"
import  {ProductCrudComponent} from "./view/product-crud/product-crud.component"

const routes: Routes = [{
  path: "",
  component: HomeComponent
},

{
  path: "products",
  component: ProductCrudComponent
},
{
  path:"product/create",
  component: ProductCreateComponent

},
{ // ao colocar o ":" na frente indico a passagem de um parametro, neste caso um "id"
  path:"product/update/:id",
  component: ProductUpdateComponent
},
{ 
  
  path:"product/delete/:id",
  component: ProductDeleteComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
