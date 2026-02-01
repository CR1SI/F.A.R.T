import { Component } from '@angular/core';
import { Faq } from '../faq/faq';
import { AboutSignUp } from '../about-sign-up/about-sign-up';
import { ScheduleBoard } from '../schedule-board/schedule-board';

@Component({
  selector: 'app-home',
  imports: [Faq, AboutSignUp,ScheduleBoard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
