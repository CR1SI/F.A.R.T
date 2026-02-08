import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ScheduleBoard } from '../schedule-board/schedule-board';
import { AuthService } from '../auth-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  imports: [RouterLink, ScheduleBoard, CommonModule],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
})
export class HeaderNav {
  constructor(public authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
