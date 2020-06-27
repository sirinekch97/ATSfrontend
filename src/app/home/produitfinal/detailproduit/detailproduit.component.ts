import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/service/productservice.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {

  idP:any;
  tab
  next
  submitted=false
  product
  p
  c
  r
i
  registerForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private ProductService: ProductserviceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      prod: ['']
      

      })
    this.allprod();
  }
  recuperer(_id){
    this.idP=_id;
    console.log('recuperer : ',_id)
  
  }
  allprod(){
    this.ProductService.getallprod().subscribe(res=>{
      console.log(res)
      this.tab=res;
    });
}
onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    console.log('le formulaire est invalide : ', this.registerForm.value)
 
 
            return;
        }
 
        this.registerForm.get('prod')
        
  this.ProductService.getdetailprod(this.idP).subscribe(res=>{
  console.log("here",res);
 
 
        this.product=res;
        this.r=this.product.Reviews
        this.p=this.product.ProductName
        this.c=this.product.Category
        this.i=this.product.ImageUrl

    
  this.registerForm.reset();
})
this.next=true;

}
get f (){
  return this.registerForm.controls;
}
}


