import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'


const routes: Routes = [{path:'',component:HomeComponent,children:[{path:'product',loadChildren:'./home/product/product.module#ProductModule'}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
