import { Component } from '@angular/core';
import { Faq } from '../faq/faq';
import { AboutSignUp } from '../about-sign-up/about-sign-up';

@Component({
  selector: 'app-home',
  imports: [Faq, AboutSignUp],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
