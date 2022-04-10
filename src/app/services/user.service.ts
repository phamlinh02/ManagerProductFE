import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

const API_URL = 'http://localhost:8080/api/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getEmployeeBoard(): Observable<any> {
    return this.http.get(API_URL + 'employee', { responseType: 'text' });
  }
  getStaffBoard(): Observable<any> {
    return this.http.get(API_URL + 'staff', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  deleteUser( userId : number) : Observable<any>{
    return this.http.delete(API_URL+'deleteUser/'+userId);
  }

  createUser(user : User) : Observable<any>{
    return this.http.post(API_URL+'postUser/'+ user);
  }
}

