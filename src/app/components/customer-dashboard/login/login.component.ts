import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Email: string = 'email';
  PWD: string = 'pwd';
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fi-bs-eye';
  loginForm!: FormGroup;
  user:any = {}

  constructor( private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private http:HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailid: ['', Validators.required],
      password: ['', Validators.required],
      
    });
   
  }
  
  Login(Email: string, PWD: string): any {
    
    //console.log(param);
    
    this.http
      .get<any>('http://localhost:55480/api/UserDetails/' + Email + '/' + PWD)
      .subscribe((data) => {
        console.log(data);

        if (data.Status == 'Error') {
          alert(data.Message);
        } else {
          localStorage.setItem('User', JSON.stringify(data));
          //console.log(data.userName=='Admin');return;
          if (data.value.userType == 'Admin') {
            window.location.href = '/admin-dashboard';
          } else {
            window.location.href = '/customer-dashboard';
          }
        }
      });
    return false;
  }
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  
}

function go(arg0: string) {
  throw new Error('Function not implemented.');
}