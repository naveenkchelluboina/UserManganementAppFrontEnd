import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth.guard';
import { AdminGuard } from './admin.guard';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin', 
    component:AdminComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'userinfo',
    component:UserInfoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

