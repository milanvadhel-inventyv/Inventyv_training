import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal, Signal } from '@angular/core';
import { User } from '../Interfaces/user';
import { map, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // User=signal<User | null>(null);
  constructor() { }

  private httpclient=inject(HttpClient);
   API_URL='https://dummyjson.com/auth/';
   platformId=inject(PLATFORM_ID)
   private readonly tokenKey="Secret71637";

   setToken(token:string)
   {
    if(isPlatformBrowser(this.platformId)){
    localStorage.setItem(this.tokenKey,token);
    }
   }
   isAuthenticated()
   {
    return !!this.GetToken();
   }
   GetToken():string | null
   {
    if(isPlatformBrowser(this.platformId)){
    const token=localStorage.getItem(this.tokenKey);
    return token;}
    return null
   }
   ClearToken()
   {
    if(isPlatformBrowser(this.platformId)){
    localStorage.removeItem(this.tokenKey);
    }
   }
   LoggingUser(UserData:any)
   {
    return this.httpclient.post<any>(this.API_URL+"login",UserData).pipe(
      tap(res=>
      {
          this.setToken(res.accessToken);
          console.log(res.accessToken)
      },
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
