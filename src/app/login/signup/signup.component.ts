import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user1={"user_name":"","email":"","password":""}

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }
signup(){
  this.loginService.registerUser(this.user1).subscribe((data: any[]) => {
    
    alert('signup successfully');
});
this.route.navigate(['./login'])
}
}
