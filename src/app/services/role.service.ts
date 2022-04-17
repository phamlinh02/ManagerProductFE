import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/Role';

const API_URL = 'http://localhost:8080/api/employee/role/';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  
  getListRole() {
    return this.http.get<Role[]>(API_URL + 'fill-cbo').pipe();
  }
  
}

