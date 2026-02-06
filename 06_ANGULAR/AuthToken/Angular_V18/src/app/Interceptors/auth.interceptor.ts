import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthServiceService) {}
 plateform_Id=inject(PLATFORM_ID);
 public_url=['/login'];
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.public_url.some((url)=>
  req.url.includes(url)))
 {
 return next.handle(req);
 }
 if(isPlatformBrowser(this.plateform_Id)){
  const token=this.authService.GetToken();

  const newReq=req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  });
  return next.handle(newReq);
}
return next.handle(req)
  }

 

 

}
