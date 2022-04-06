import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private  URL_API : string;
  constructor(
    private httpClient : HttpClient
  ) { 
    this.URL_API = "http://localhost:8080/user"
  }

  public findAll() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.URL_API);
  }

  public saveUser(user : Employee) : Observable<Object>{
    return this.httpClient.post(this.URL_API +"/addUser" , user);
  }

  public  updateUser(id : number , value: any) : Observable<Object>{
    return this.httpClient.put(this.URL_API+"/updateUser/"+id,value);
  }

  public  deleteUser(id : number) : Observable<Object>{
    return this.httpClient.delete(this.URL_API+"/deleteUser/"+id);
  }

  public getUserById(id : number) : Observable<any>{
    
    return this.httpClient.get(this.URL_API+"/"+id)
  }


  
}
