import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder,FormControl,FormGroup } from '@angular/forms';
import { StaffService } from 'app/staff/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.scss']
})
export class StaffCreateComponent implements OnInit {

  staffForm:any;

  constructor(private route:Router,private staffservice:StaffService, private readonly formBuilder:NonNullableFormBuilder) { }

  ngOnInit(): void {

    
    this.staffForm = this.formBuilder.group(
      {
        staff_id: new FormControl(""),
        staff_name: new FormControl(""),
        designation: new FormControl(""),
        
      }
    );

    
  }

  create(){
   
      console.table(this.staffForm.value);
      this.staffservice.addstaff(this.staffForm.value).subscribe((data: any[]) => {
       console.log('staff created');
       alert('staff details created successfully');
       this.route.navigate(['./staff'])
    });
      
    
  }

}
