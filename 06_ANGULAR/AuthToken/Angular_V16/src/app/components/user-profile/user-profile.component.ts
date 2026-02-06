import { Component, inject } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
User!:User;
  authService:AuthService=inject(AuthService);

  ngOnInit()
  {
  this.authService.GetUserData().subscribe(
 {
  next:(val)=>{
    console.log(val);
    this.User=val;
  },
  error:(err)=>{
    console.log("error"+err)
  }
 }
  )
  }
}
