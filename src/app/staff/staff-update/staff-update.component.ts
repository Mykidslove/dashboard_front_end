import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder,FormControl,FormGroup } from '@angular/forms';
import { StaffService } from 'app/staff/staff.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff-update',
  templateUrl: './staff-update.component.html',
  styleUrls: ['./staff-update.component.scss']
})
export class StaffUpdateComponent implements OnInit {

  staffForm:any;
  currentId:any;
  
  constructor(private route: Router, private router:ActivatedRoute,private staffservice:StaffService, private readonly formBuilder:NonNullableFormBuilder) { }

  ngOnInit(): void {

    this.currentId = this.router.snapshot.paramMap.get("id")

    this.staffservice.getstaff_info(this.currentId).subscribe((data: any[]) => {
      this.staffForm= data[0];
  });

    console.log(this.currentId)
  
    
   

    
  }


  update(){

    
      let staffdata = {
        "staff_name": this.staffForm.staff_name,
        "designation": this.staffForm.designation
      }
      this.staffservice.updateStaff(this.currentId, staffdata).subscribe((data: any) => {
        this.route.navigate(['/staff']);
      });
    
  
  }

}
