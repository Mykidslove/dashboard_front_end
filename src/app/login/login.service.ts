import { Injectable } from '@angular/core';
import{ 
  HttpClient, HttpHeaders
} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // url="http://localhost:3001/employee_list"
  constructor(private http: HttpClient) { }

 
  registerUser(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/signUp",data)
   }
  loginUser(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/login",data)
  }
   
}
