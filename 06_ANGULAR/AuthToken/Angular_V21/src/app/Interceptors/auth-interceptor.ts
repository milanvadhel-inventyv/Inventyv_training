import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}
 public_url=['/login'];
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 
    if(this.public_url.some((url)=> req.url.includes(url)))
 {
 return next.handle(req);
 }
 
  const token=this.authService.GetToken();
if(token){
  const newReq=req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    
}});
    return next.handle(newReq);

}

return next.handle(req)
}

 

}
