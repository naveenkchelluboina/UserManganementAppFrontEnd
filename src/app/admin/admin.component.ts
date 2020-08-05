import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usersData: any;
  constructor(private _data:DataService, private _router:Router) { }

  ngOnInit(): void {
    this._data.getUsers().subscribe(
      res => { 
        this.usersData = res.users
        console.log(this.usersData)
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status == 401){
            this._router.navigate(['login'])
          }
        }
      }
    );
    
  }

}
