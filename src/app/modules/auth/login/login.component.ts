import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {AuthenticatedResponse} from "../../../models/authenticated-response";
import {Router} from "@angular/router";
import {LoginModel} from "../../../models/login-model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getErrorMessage(field: string) {
    const control = this.loginForm.get(field);
    if (control && control.errors) {
      if (control.hasError('required')) {
        return 'You must enter a value';
      } else if (control.hasError('email')) {
        return 'Not a valid email';
      }
    }
    return '';
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const loginModel: LoginModel = {email, password}

      this.http.post<AuthenticatedResponse>("http://localhost:5000/api/v1/auth/login", loginModel, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
        .subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.token;
            const refreshToken = response.refreshToken;
            localStorage.setItem("jwt", token);
            localStorage.setItem("refreshToken", refreshToken);
            this.router.navigate(["/"]);
          }
        })
    } else {
      // Form is invalid, handle accordingly (show errors, etc.)
    }
  }
}
