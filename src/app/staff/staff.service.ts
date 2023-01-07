import { Injectable } from '@angular/core';
import{ 
  HttpClient, HttpHeaders
} from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  getemp_info(currentId: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getstaff():Observable<any>{
    return this.http.get("http://localhost:3000/getstaff")
  }
  addstaff(staff:any):Observable<any>{
    return this.http.post("http://localhost:3000/staff",staff)
  }
  deletestaff(data):Observable<any>{
    
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:data
    };

    return this.http.delete("http://localhost:3000/delete_staff",options)
   }

   getstaff_info(staff_id:any):Observable<any>{
    return this.http.get('http://localhost:3000/getstaff/'+staff_id)
  }
   
  updateStaff(staff_id:any,staff:any):Observable<any>{
    return this.http.put('http://localhost:3000/updateStaff/'+staff_id,staff)
  }

 
  }


