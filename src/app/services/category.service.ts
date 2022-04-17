import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

const API_URL = 'http://localhost:8080/api/product/category/';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  getListCate() {
    return this.http.get<Category[]>(API_URL + 'fill-cbo').pipe();
  }
  
}

