import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { loginGuard } from './guards/login.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent,canActivate:[loginGuard]},
    {path:'home',component:HomeComponent,canActivate:[authGuard]},
    {path:'UserProfile',component:UserProfileComponent,canActivate:[authGuard]}
];
