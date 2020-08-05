import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myregisterform: FormGroup 

  constructor(private auth:AuthserviceService, private route:Router) { }

  ngOnInit(): void {
    this.RegisterFrom();
  }

  RegisterFrom(){
    this.myregisterform = new FormGroup({      
      email: new FormControl("",[Validators.required]),
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }

  submitRegisterFrom(){    
    this.auth.registerUser(this.myregisterform.value).subscribe(
      res => {
        localStorage.setItem('token',res.token)
        console.log(res)
        this.route.navigate(['/admin']);
      },
      err => console.log(err)
    )    
  }
}
