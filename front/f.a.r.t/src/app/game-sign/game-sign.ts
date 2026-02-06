import { Component } from '@angular/core';

@Component({
  selector: 'app-game-sign',
  imports: [],
  templateUrl: './game-sign.html',
  styleUrl: './game-sign.css',
})
export class GameSign {
  //will call an api that should return a list of the games
  public games: Game[] = [
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg", score: 3}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg", score: 0}, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg", score: 3}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg", score: 0}, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg", score: 3}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg", score: 0}, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg", score: 3}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg", score: 0}, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg", score: 3}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg", score: 0}, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
  ]

}

type Team = {
  name: string,
  logoUrl: string,
  score: number,
}

type Game = {
  team1: Team,
  team2: Team,
  gamePlayed: boolean,
  dateChosen: boolean,
  opponentsSelected: boolean,
  vodLink: string,
  date: string,
}