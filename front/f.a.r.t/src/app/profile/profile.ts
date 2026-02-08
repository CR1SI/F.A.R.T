import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  isLoading: boolean = false;
  selectedFile: File | null = null;
  displayName = new FormControl('');

   constructor(public authService: AuthService) {}

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  onSave() {
    if (!this.displayName.value && !this.selectedFile) {
      console.warn('No changes to save');
      return;
    }

    this.isLoading = true;
    const data = {
      display_name: this.displayName.value || '',
      pfp: this.selectedFile || undefined
    };

    if(data == null) return;

    this.authService.updateProfile(data).subscribe({
      next: (updatedProfile) => {
        console.log('Profile updated', updatedProfile);
        this.selectedFile = null;
        this.displayName.reset();
        this.isLoading = false;
      },
      error: (err) => console.error(err)
    });

    this.isLoading = true;
  }
}
