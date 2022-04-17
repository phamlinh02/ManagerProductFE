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
export class ReceiveStatisticService {

  constructor(private http: HttpClient) { }

  getListReceived() {
    return this.http.get<Received[]>(API_URL + 'all').pipe();
  }

  getMonth(){
    return this.http.get<String[]>(API_URL+"get-month").pipe();
  }

  getByMonthAndYear( month : string,  year : string){
    return this.http.get<Received[]>(API_URL+"find-by-month-year?month = "+month +"&year="+year);
  }

  getByAroundDate(startDate : string, endDate : string ){
    return this.http.get<Received[]>(API_URL+"find-around-date?startDate = "+ startDate + "&endDate = "+ endDate)
  }

  getBeforeDate(date : string){
    return this.http.get<Received[]>(API_URL+"find-before-date/"+date);
  }

  getAfterDate(date : string){
    return this.http.get<Received[]>(API_URL+"find-after-date/"+date);
  }
}

