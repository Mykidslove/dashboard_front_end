import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder,FormControl,FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  emForm:any;
  currentId:any;
  
  constructor(private route: Router, private router:ActivatedRoute,private empService:EmployeeService, private readonly formBuilder:NonNullableFormBuilder) { }

  ngOnInit(): void {

    this.currentId = this.router.snapshot.paramMap.get("id")

    this.empService.getem_info(this.currentId).subscribe((data: any[]) => {
      this.emForm= data[0];
  });

    console.log(this.currentId)
  
    
   

    
  }


  update(){

    
      let empdata = {
        "name": this.emForm.name,
        "designation": this.emForm.designation,
        "department":this.emForm.department,
        "salary":this.emForm.salary
      }
      this.empService.updateEmployee(this.currentId, empdata).subscribe((data: any) => {
        this.route.navigate(['/employee']);
      });
    
  
  }

}
