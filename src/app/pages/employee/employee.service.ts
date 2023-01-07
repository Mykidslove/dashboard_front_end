import { Injectable } from '@angular/core';
import{ 
  HttpClient, HttpHeaders
} from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // url="http://localhost:3001/employee_list"
  constructor(private http: HttpClient) { }

  getEmployees():Observable<any>{
   return this.http.get("http://localhost:3000/employees")
  }
  createEmployee(emp:any):Observable<any>{
    return this.http.post("http://localhost:3000/employee",emp)
   }
   deleteEmployees(data:any):Observable<any>{
   
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:data
    };

    return this.http.delete("http://localhost:3000/delete_employee",options)
   }
   getem_info(empId:any):Observable<any>{
    return this.http.get('http://localhost:3000/employees/'+empId)
  }
  updateEmployee(empId:any,emp:any):Observable<any>{
    return this.http.put('http://localhost:3000/updateEmployee/'+empId,emp)
  }
   
}
