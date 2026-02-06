import { Component, inject } from '@angular/core';
import { User } from '../../Interfaces/user';
import { AuthServiceService } from '../../services/auth-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

User!:User;
  authService:AuthServiceService=inject(AuthServiceService);

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
