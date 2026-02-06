import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private httpclient=inject(HttpClient);
   API_URL='https://dummyjson.com/auth/';
   private readonly tokenKey="Secret71637";

   setToken(token:string)
   {
    
    localStorage.setItem(this.tokenKey,token);
    
   }
   isAuthenticated()
   {
    return !!this.GetToken();
   }
   GetToken():string | null
   {
    const token=localStorage.getItem(this.tokenKey);
    if(token)
      return token;
    return null
   }
   ClearToken()
   {
    localStorage.removeItem(this.tokenKey);
    
   }
   LoggingUser(UserData:any)
   {
    return this.httpclient.post<any>(this.API_URL+"login",UserData).pipe(
      tap(res=>
      {
          this.setToken(res.accessToken);
          console.log(res.accessToken)
      }
      )
    )  
    
   }

    //getting UserData
     GetUserData()
    {
      return this.httpclient.get<User>(this.API_URL+"me").pipe(
        map((res:any):User=> ({
          Id:res.id,
          Name:res.username,
          Image:res.image,
          Email:res.email,
          Gender:res.gender,
        } )
        )
      )
    }

}
