import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private authService:AuthService){

  }
  router=inject(Router);
  UserName:string=""
  Email:string=""
  Password:string="";

  Login()
  {
    this.authService.LoggingUser({username:this.UserName,email:this.Email,password:this.Password}).subscribe((val)=>{
      console.log("component",val);
      this.router.navigate(["/home"])
    });
    
  }

}




