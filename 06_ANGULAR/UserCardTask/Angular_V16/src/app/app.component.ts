import { Component, inject } from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { Observable} from 'rxjs';
import { UserInfo } from 'src/app/interfaces/user-info';
import { UserCardService } from 'src/app/services/user-card.service';
@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_V16';

  userInfo!:Observable<UserInfo[]>;
  usercardService:UserCardService=inject(UserCardService);
  ngOnInit(): void {
    this.userInfo=this.usercardService.GetUserData();
    console.log("ngOnInit"+this.userInfo)
}
Toggle(userId:string){
  console.log("Toggle event received in parent component for userId: "+userId);
  
}
}
