import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeproduitComponent} from './listeproduit/listeproduit.component';
import {DetailproduitComponent} from './detailproduit/detailproduit.component';



const routes: Routes = [{path:'allprod',component:ListeproduitComponent},{path:'detail',component:DetailproduitComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitfinalRoutingModule { }
