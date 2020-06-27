import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitfinalRoutingModule } from './produitfinal-routing.module';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListeproduitComponent, DetailproduitComponent],
  imports: [
    CommonModule,
    ProduitfinalRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ProduitfinalModule { }
