import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  host: {
    'ngSkipHydration': ''
  },
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  
  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  isLoading = false;

  onLogin(){
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMsg = '';

    this.authService.login(this.loginForm.value).subscribe({
      next: (profile) => {
        console.log('login successful, profile loaded: ', profile);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMsg = 'Invalid username or password.';
        console.error('Login error:', err);
        this.isLoading = false;
        this.loginForm.get('password')?.reset();
      }
    });
  }
}
