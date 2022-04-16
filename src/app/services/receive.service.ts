import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../model/Delivery';
import { Received } from '../model/Received';
import { Unit } from '../model/Unit';

const API_URL = 'http://localhost:8080/api/statistic/received/';
@Injectable({
  providedIn: 'root'
})
export class ReceiveService {

  constructor(private http: HttpClient) { }
  
//   getListReceived() {
//     return this.http.get<Received[]>(API_URL + 'all').pipe();
//   }
  
}

