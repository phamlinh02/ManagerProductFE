import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

const API_URL = 'http://localhost:8080/api/employee/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getListEmployee() {
    return this.http.get<User[]>(API_URL + 'all').pipe();
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

  saveUser(user : User){
    return this.http.post(API_URL+"save-employee", user);
  }

  updateUser(user : User){
    return this.http.put(API_URL+"update-employee/"+user.empId, user );
  }

  deleteUser(user : User){
    return this.http.post(API_URL+"delete-employee/"+user.empId, user );
  }
}

