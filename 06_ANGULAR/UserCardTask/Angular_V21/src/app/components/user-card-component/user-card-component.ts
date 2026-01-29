import { Component, ElementRef, input, output, QueryList, signal, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { UserInfo } from '../../interfaces/user-info';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card-component',
  standalone:true,
  imports: [MatCardModule,MatButtonModule,MatInputModule,FormsModule],
  templateUrl: './user-card-component.html',
  styleUrl: './user-card-component.css',
})
export class UserCardComponent {
  userSignal=input<UserInfo|null>(null);
  user=signal<UserInfo|null>(null);
  ToggleEvent=output<number | undefined>();

// @Input() user!:UserInfo;
// @Output() ToggleEvent=new EventEmitter<string>();
@ViewChild("inputField") inputfield!:ElementRef<HTMLInputElement>;
@ViewChildren(MatButton)matbutton!:QueryList<MatButton[]>;
constructor(){
  console.log("child Coponent Constructor::"+this.user);
}
ngOnInit()
{
  console.log("UserCard component NgOnInit ::"+this.user)
}
ngOnChanges(change:SimpleChange)
{
this.user.set(this.userSignal())
  console.log("NgonChange::"+change.previousValue,this.user)
}
UserNameChange(name:string)
{
  this.user.update(user=>
    user?{...user,name}:user
  )
}


ChangeStatus()
{

  this.ToggleEvent.emit(this.user()?.id);
}
ngAfterViewInit() {
console.log("inputfield::", this.inputfield.nativeElement.id);
console.log("MatButton::",this.matbutton.toArray())
}

  
}
