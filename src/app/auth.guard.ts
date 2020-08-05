import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthserviceService, private _router: Router){}
  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true
    }
    else{
      this._router.navigate(['login'])
      return false
    }
  }
  
}
