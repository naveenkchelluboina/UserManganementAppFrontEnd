import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import {AuthserviceService} from "../authservice.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  currentUser;
  currentUserPassword;  

  login: any;

  constructor(private auth:AuthserviceService, private route: Router) { }

  ngOnInit(){
    this.loginfrom();                 
  }
  loginfrom(){
    this.myform = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }
  submitFrom(){
    if(this.myform.valid){  
      this.auth.loginUser(this.myform.value).subscribe(
        res => {
          localStorage.setItem('token',res.token)
          localStorage.setItem('loggedUser',res.userName)
          localStorage.setItem('UserId', res.user._id)
          //console.log(res,res.user._id)
          this.route.navigate(['home',{user: res.userName}]);
        },
        err => alert("Invalid creds")
      )         
    }
  }
}
