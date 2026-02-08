import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  host: {
    'ngSkipHydration': ''
  },
})
export class Register {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(){
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe({
      next: (user) => {
        console.log('register success: ', user);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMsg = 'Invalid Registration.';
        console.error('registering error:', err);
      }
    });
  }
}
