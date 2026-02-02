import { Component } from '@angular/core';

@Component({
  selector: 'app-game-sign',
  imports: [],
  templateUrl: './game-sign.html',
  styleUrl: './game-sign.css',
})
export class GameSign {
  public gameCompleted: boolean = true;
  public vodLink: string = "";
  public dateDetermined: boolean = true;
  public date: string = "FRI, FEB 13 - 3:00 PM";
  public oponentsDetermined: boolean = true;
  
  public team1: Team = {name: "AUR", logoUrl: "assets/logos/AUR.svg", score: 3}; //test
  public team2: Team = {name: "TKY", logoUrl: "assets/logos/TKY.svg", score: 0}; //test
}

type Team = {
  name: string,
  logoUrl: string,
  score: number,
}