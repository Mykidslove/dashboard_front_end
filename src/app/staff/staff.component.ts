import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from './staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  stafflist:any=[];

  constructor(private staffservice:StaffService,private route:Router) { }

  ngOnInit(): void {
   this.getStaff();
   
  }

  getStaff(){
    this.staffservice.getstaff().subscribe((data: any[]) => {
      this.stafflist= data;
      console.log( this.stafflist)
  });
  }
staffAdd(){

  this.route.navigate(['./staff-create'])

}
deleteEmp(staff_id:any){
  let data={
    "staff_id":staff_id
  }   
  
  
  this.staffservice.deletestaff(data).subscribe((data: any[]) => {
    this.stafflist= data;
    console.log( this.stafflist)
  


}

  )
  this.getStaff();

};

editEmp(staff_id:any){
   this.route.navigate(['./staff', staff_id])

}
}