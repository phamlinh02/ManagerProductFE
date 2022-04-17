import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MadeBy } from '../model/MadeBy';
import { User } from '../model/User';

const API_URL = 'http://localhost:8080/api/product/made/';
@Injectable({
  providedIn: 'root'
})
export class MadeService {

  constructor(private http: HttpClient) { }

  getListMade() {
    return this.http.get<MadeBy[]>(API_URL + 'fill-cbo').pipe();
  }
  
}