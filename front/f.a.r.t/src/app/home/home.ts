import { Component } from '@angular/core';
import { Faq } from '../faq/faq';
import { AboutSignUp } from '../about-sign-up/about-sign-up';
import { NewsSection } from "../news-section/news-section";

@Component({
  selector: 'app-home',
  imports: [Faq, AboutSignUp, NewsSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
