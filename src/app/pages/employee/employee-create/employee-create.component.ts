import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  empForm:any;

  constructor(private route: Router,private empService: EmployeeService,    private readonly formBuilder: NonNullableFormBuilder,) { }

  ngOnInit(): void {

    this.empForm = this.formBuilder.group(
      {
        empId: new FormControl(""),
        name: new FormControl(""),
        designation: new FormControl(""),
        department: new FormControl(""),
        salary: new FormControl(""),
      }
    );
  }
  create(){
  console.table(this.empForm.value);
  this.empService.createEmployee(this.empForm.value).subscribe((data: any[]) => {
    this.route.navigate(['./employee'])
});
  
  }
}
