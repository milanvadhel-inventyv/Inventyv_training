import { Component, inject, Signal } from '@angular/core';
import { UserCardService } from './services/user-card-services';
import { UserInfo } from './interfaces/user-info';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserCardComponent } from './components/user-card-component/user-card-component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[UserCardComponent],
  templateUrl: './app.html'
})
export class App {
  userService:UserCardService=inject(UserCardService);
  users=this.userService.users;
  constructor()
  {
    console.log("App-component Constructor Called::"+this.users)
  }
  ngOnInit()
  {
    this.userService.getUsers();
    console.log("NgOnInit ::",this.users());
  }
  ToggleStatus(userId:number | undefined){
    this.users.update(users=>users.map(user=>
      user.id === userId?{...user,status:user.status=== "Active"?"InActive":"Active"}:user
    )
    )
  }
}
