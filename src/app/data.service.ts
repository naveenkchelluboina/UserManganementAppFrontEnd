import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _usersUrl = "http://localhost:4000/api/user"

  private _findUser = "http://localhost:4000/api/user/"

  currentUser = localStorage.getItem('loggedUser');
  currentUserId = localStorage.getItem('UserId');

  login : any;

  constructor(private _http:HttpClient, private _router:Router) { }


  getUsers(){
    return this._http.get<any>(this._usersUrl)
  }

  findUser(){
    return this._http.get<any>(this._findUser + this.currentUserId)
  }

  _navigate(){  
    this._router.navigate(['userinfo',{user: this.currentUser}])
  }

} 