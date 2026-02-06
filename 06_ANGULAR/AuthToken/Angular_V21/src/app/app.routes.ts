import { Routes } from '@angular/router';
import { UserProfile } from './components/user-profile/user-profile';
import { authGuard } from './Guards/auth-guard';
import { loginGuard } from './Guards/login-guard';
import { Home } from './components/home/home';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path:'',component:Login,canActivate:[loginGuard]},
        {path:'home',component:Home,canActivate:[authGuard]},
        {path:'UserProfile',component:UserProfile,canActivate:[authGuard]}
];
