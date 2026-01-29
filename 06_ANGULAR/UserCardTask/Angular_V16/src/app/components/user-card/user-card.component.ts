import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges,  Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { UserInfo } from 'src/app/interfaces/user-info';

@Component({
  selector: 'app-user-card',
  standalone:false,

  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

@Input() user!:UserInfo
@Output() ToggleEvent=new EventEmitter<string>();

@ViewChild('inputField') inputfield!:ElementRef<HTMLInputElement>;
 @ViewChildren(MatButton) matbutton!:QueryList<MatButton>;
@ContentChild('h2')h2context!:ElementRef<HTMLHeadingElement>;


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges in child component:: "+changes['user'].previousValue, "Current user:",this.user)
  }
ChangeStatus()
{

  this.user.status=this.user.status==="Active"?"InActive":"Active";
  this.ToggleEvent.emit(this.user.id.toString());
  
}
ngAfterViewInit() {
console.log("inputfield::", this.inputfield.nativeElement);
this.matbutton.forEach((button)=>{
  console.log("Button Element::"+button._elementRef.nativeElement.textContent);
})
}
ngAfterContentInit(){
  console.log("h2 context:: ",this.h2context.nativeElement.textContent);
}

}
