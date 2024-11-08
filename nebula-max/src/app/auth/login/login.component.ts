import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authForm: FormGroup;
  isLogin = true;
  showPassword = false;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: [''],
    });
  }

  ngOnInit(): void {
    this.updateValidators();
  }

  toggleMode(): void {
    this.isLogin = !this.isLogin;
    this.submitted = false;
    this.authForm.reset();
    this.updateValidators();
  }

  updateValidators(): void {
    const nameControl = this.authForm.get('name');
    if (!this.isLogin) {
      nameControl?.setValidators([Validators.required]);
    } else {
      nameControl?.clearValidators();
    }
    nameControl?.updateValueAndValidity();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.authForm.valid) {
      console.log('Form submitted:', this.authForm.value);
    }
  }

  get f() {
    return this.authForm.controls;
  }
}


