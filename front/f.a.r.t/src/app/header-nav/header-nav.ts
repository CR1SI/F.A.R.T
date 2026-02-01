import { Component } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  imports: [],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
})
export class HeaderNav {

  onLoginClicked(): void{
    console.log("login pressed");
  }

  onNavClicked(buttonID: string): void{
    switch(buttonID){
      case 'standingsButton':
        console.log(buttonID);
        break;
      case 'newsButton':
        console.log(buttonID);
        break;
      case 'teamsButton':
        console.log(buttonID);
        break;
      case 'scheduleButton':
        console.log(buttonID);
        break;
      case 'pickEmButton':
        console.log(buttonID);
        break;
    }
  }
}
