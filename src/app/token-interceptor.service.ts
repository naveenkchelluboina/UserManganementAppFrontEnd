import { Injectable } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthserviceService) { }

  intercept(req, next){
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization : `Bearer ${this._auth.getToken()}`
      }
    })
    return next.handle(tokenizedRequest)
  }

}
