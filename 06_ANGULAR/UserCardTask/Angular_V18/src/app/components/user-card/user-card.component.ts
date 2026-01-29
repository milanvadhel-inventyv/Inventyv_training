import { Component, Input, Output, SimpleChange ,EventEmitter,QueryList, ViewChild, ElementRef, ViewChildren} from '@angular/core';
import { UserInfo } from '../../interfaces/user-info';
import {MatCardModule} from '@angular/material/card'
import {MatButton, MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
@Input() user!:UserInfo;
@Output() ToggleEvent=new EventEmitter<string>();
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
  console.log("NgonChange::"+change.previousValue,this.user)
}

ChangeStatus()
{
  this.user.status=this.user.status==='Active'?"InActive":"Active";
  this.ToggleEvent.emit(this.user.id.toString());
}
ngAfterViewInit() {
console.log("inputfield::", this.inputfield.nativeElement.id);
console.log("MatButton::",this.matbutton)
}
}
