import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatButtonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
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
