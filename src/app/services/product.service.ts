import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
