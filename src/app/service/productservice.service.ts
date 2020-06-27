import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  baseURL = environment.baseUrl;

  constructor(private http:HttpClient) { }


  getallprod(){
    return this.http.get(this.baseURL+'/Products/findall');
  }
  getdetailprod(){
    return this.http.get(this.baseURL+'/Products/find');
  }


  
}
