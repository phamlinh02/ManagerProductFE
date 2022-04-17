import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from '../model/Unit';

const API_URL = 'http://localhost:8080/api/product/unit/';
@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }
  
  getListUnit() {
    return this.http.get<Unit[]>(API_URL + 'fill-cbo').pipe();
  }
  
}

