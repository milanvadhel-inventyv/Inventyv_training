import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './Guards/login.guard';
import { authGuard } from './Guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
      {path:'',component:LoginComponent,canActivate:[loginGuard]},
    {path:'home',component:HomeComponent,canActivate:[authGuard]},
    {path:'UserProfile',component:UserProfileComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
