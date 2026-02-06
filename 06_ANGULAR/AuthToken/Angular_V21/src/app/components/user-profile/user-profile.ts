import { Component, inject, signal, Signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { User } from '../../Interfaces/user';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-profile',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
User=signal<User | null>(null);
  authService:AuthService=inject(AuthService);

  ngOnInit()
  {
  this.authService.GetUserData().subscribe(
 {
  next:(val)=>{
    console.log(val);
    this.User.set(val);
  },
  error:(err)=>{
    console.log("error"+err)
  }
 }
  )
  }
}
