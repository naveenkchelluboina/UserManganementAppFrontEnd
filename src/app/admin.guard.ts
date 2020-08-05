import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  currentUser = localStorage.getItem('loggedUser')
  constructor(private auth:AuthserviceService, private _router:Router){}
  canActivate():boolean{
    if(this.currentUser === 'Admin@a.com'){
      return true
    }
    else{
      this._router.navigate(['login'])
      return false
    }
  }
  
}
