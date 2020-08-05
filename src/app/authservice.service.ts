import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface mydata{
  id:number,
  username:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private _registerUrl = "http://localhost:4000/api/register";
  private _loginUrl = "http://localhost:4000/api/login"


  constructor(private myhttp:HttpClient,private _route:Router) { }

  registerUser(user: any){
    return this.myhttp.post<any>(this._registerUrl, user);
  }

  loginUser(user: any){
    return this.myhttp.post<any>(this._loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('UserId')
    this._route.navigate(['home'])
  }

}
