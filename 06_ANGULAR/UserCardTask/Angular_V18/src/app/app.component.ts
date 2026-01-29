import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';
import { Observable } from 'rxjs';
import { UserInfo } from './interfaces/user-info';
import { UserCardService } from './services/user-card.service';
import { AsyncPipe, NgFor, NgForOf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UserCardComponent,AsyncPipe,NgForOf,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_V18';
  userInfo$!:Observable<UserInfo[]>;
  userCardService:UserCardService=inject(UserCardService);

  ngOnInit()
  {
    console.log("Parent :: ngOnInit()")
    this.userInfo$=this.userCardService.GetUserData();
  }
  ToggleStatus(userId:string)
  {
    console.log("Event emit on ::",userId);
  }

}
