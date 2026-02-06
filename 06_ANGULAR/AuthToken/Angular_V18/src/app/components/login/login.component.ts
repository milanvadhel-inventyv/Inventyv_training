import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService:AuthServiceService){

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
