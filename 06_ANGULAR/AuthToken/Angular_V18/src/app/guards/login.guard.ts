import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const authService:AuthServiceService=inject(AuthServiceService);

  if(authService.isAuthenticated())
  {
    router.navigate(["home"],{replaceUrl:true});
    return false;
  }
  return true;
};
