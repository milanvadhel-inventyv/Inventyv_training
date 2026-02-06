import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

 const  authService=inject(AuthServiceService);
 const router=inject(Router)
const  token=authService.GetToken();
if(token)
{
  return true;
}

router.navigate(['/'])
  return false;
};
