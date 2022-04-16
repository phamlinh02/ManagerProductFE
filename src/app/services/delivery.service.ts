import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../model/Delivery';
import { Unit } from '../model/Unit';

const API_URL = 'http://localhost:8080/api/statistic/delivery/';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }
  
  getListDelivery() {
    return this.http.get<Delivery[]>(API_URL + 'all').pipe();
  }
  
}

