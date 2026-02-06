import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authservice=inject(AuthService)
  const public_url=['']

  if(public_url.some((url)=>{
  req.url.includes(url)
  }))
    return next(req);

  const token=authservice.GetToken();
  if(token){
    const newReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })
    return next(newReq)
  }
  return next(req)
};
