import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';
import { Product } from '../model/Product';

const API_URL = 'http://localhost:8080/api/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAll() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL + 'all')
  }

  public getByName(name : String) : Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL+'nameProduct/'+name)
  }

  public getListCategory() : Observable<Category[]>{
    return this.httpClient.get<Category[]>(API_URL+"category/fill-cbo");
  }

  public updateProduct(product : any) : Observable<Object>{
    return this.httpClient.put(API_URL+"update-product/"+product.proId, product);
  }

  public saveProduct(product : Product){
    return this.httpClient.post(API_URL+"create-product", product);
  }

  public deleteProduct( product :any){
    return this.httpClient.put(API_URL+"delete-product/"+product.proId,product);
  }
}
