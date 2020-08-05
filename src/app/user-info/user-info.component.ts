import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  currentUserData : any;
  

  constructor(private _data:DataService, private _router:Router) { }

  ngOnInit(): void {  
    this._data.findUser().subscribe(    
      data => {
        this.currentUserData = [data]      
      }
    )
  }  
}