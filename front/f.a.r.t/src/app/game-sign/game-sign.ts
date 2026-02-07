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
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg"}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg"},scoreTeam1: 3, scoreTeam2: 0, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg"}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg"},scoreTeam1: 3, scoreTeam2: 0, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg"}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg"},scoreTeam1: 3, scoreTeam2: 0, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg"}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg"},scoreTeam1: 3, scoreTeam2: 0, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
    {team1: {name: "AUR", logoUrl: "assets/logos/AUR.svg"}, team2: {name: "TKY", logoUrl: "assets/logos/TKY.svg"},scoreTeam1: 3, scoreTeam2: 0, gamePlayed: true, dateChosen: true, opponentsSelected: true, vodLink: "", date: "FRI, FEB 13 - 3:00 PM"},
  ]

}

type Team = {
  name: string,
  logoUrl: string,
  players?: string[],
  losses?: number,
  wins?: number,
  points?: number,
}

type Game = {
  team1: Team,
  team2: Team,
  scoreTeam1: number,
  scoreTeam2: number,
  gamePlayed: boolean,
  dateChosen: boolean,
  opponentsSelected: boolean,
  vodLink: string,
  date: string,
}