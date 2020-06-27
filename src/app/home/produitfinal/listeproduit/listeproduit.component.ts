import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/service/productservice.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {

  tab
  constructor(private ProductService: ProductserviceService) { }

  ngOnInit() {
    this.allprod();

  }
  allprod(){
    this.ProductService.getallprod().subscribe(res=>{
      console.log(res)
      this.tab=res;
    });

}

}
