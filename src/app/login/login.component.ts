import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={"email":"", "password":""}
  invalidData:any="";

  constructor(private route: Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
login(){
  this.loginService.loginUser(this.user).subscribe((data: any) => {
    sessionStorage.setItem("userInfo",JSON.stringify(data))
    if(data){
      this.route.navigate(['./dashboard'])
    }
    else{
      this.invalidData="Invalid email or password";
    }   
   
});

}

signup(){
this.route.navigate(['./signup'])
}
}


