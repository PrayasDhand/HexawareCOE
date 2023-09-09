import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fi-bs-eye';
  signupForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      customername: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      emailid: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText
      ? (this.eyeIcon = 'fi-bs-eye-closed')
      : (this.eyeIcon = 'fi-bs-eye');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  onSignup() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.auth.signUp(this.signupForm.value).subscribe({
        next: (res) => {
          alert(res.message);
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          alert(err?.error.message);
        },
      });
    } else {
      this.validateAllFormFields(this.signupForm);
      this.toastr.warning('Please Fill all the Credentials','Warning');
    }
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
}
