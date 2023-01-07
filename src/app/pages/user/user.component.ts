import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    user:any;
    
   
    ngOnInit(){
console.log(this.user)
       let userInfo= sessionStorage.getItem("userInfo")
       this.user= JSON.parse(userInfo)
       console.log( this.user.email)
    }

    updateProfile(): void{

    }
}
