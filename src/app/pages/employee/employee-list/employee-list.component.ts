import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  employeeList:any = []
  constructor(private empService: EmployeeService, private route: Router) { }

  ngOnInit(): void {

    this.getEmployees();
  }
  getEmployees(){
  this.empService.getEmployees().subscribe((data: any[]) => {
      this.employeeList= data;
  });
  }

  empAdd(){
  this.route.navigate(['./employee-create'])
  }

  deleteEmp(empId:any){
    let data={
      "empId":empId
    }
    this.empService.deleteEmployees(data).subscribe((data: any[]) => {

      this.route.navigate(['./employee'])
      // this.empService.getEmployees().subscribe((data: any[]) => {
      //    this.employeeList= data;
    //  });

    
  }

  )
  this.getEmployees();


  }
;


  
editEmp(empId:any){
  this.route.navigate(['./employee', empId])

  

}
}
