import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";
import { ScheduleBoard } from '../schedule-board/schedule-board';

@Component({
  selector: 'app-header-nav',
  imports: [RouterLink, ScheduleBoard],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
})
export class HeaderNav {
}
