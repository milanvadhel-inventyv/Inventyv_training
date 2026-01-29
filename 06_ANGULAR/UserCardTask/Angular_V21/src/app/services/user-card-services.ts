import { Injectable ,signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserInfo } from '../interfaces/user-info';

@Injectable({ providedIn: 'root' })
export class UserCardService {
  constructor(private http: HttpClient) {}
  users=signal<UserInfo[]>([])
  API_URL:string='https://dummyjson.com/users';
  getUsers():void{
    this.http.get<any>(this.API_URL).subscribe({
      next:(res)=>{
       const transformed:UserInfo[]=res.users.map((u:any)=>({
          id:u.id,
          name:`${u.firstName} ${u.lastName}`,
          age:u.age,
          Image_Url:u.image,
          status:Math.random()>0.5?"Active":"InActive"
       })
      )
      this.users.set(transformed);
      console.log("Services::"+this.users())
    }
    })
  }
}
