import { Injectable } from '@angular/core';
import { UserInfo } from '../interfaces/user-info';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

   constructor() {

   }
   API_URL:string='https://dummyjson.com/users'
  GetUserData():Observable<UserInfo[]>
  {
    return from(fetch(this.API_URL)
              .then(res=>res.json())).pipe(
                          map((res: any) =>
    res.users.map(({ id, firstName, lastName, image, age }:any):UserInfo => ({
      id,
      name: `${firstName} ${lastName}`,
      Image_Url: image,
      age,
      status:Math.random()>0.5?"Active":"InActive"
      // status:"Active"
    }))
  )
)

}
}