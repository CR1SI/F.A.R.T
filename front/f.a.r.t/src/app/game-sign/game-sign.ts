import { Component, OnInit } from '@angular/core';
import { GameList } from '../game-list';

@Component({
  selector: 'app-game-sign',
  imports: [],
  templateUrl: './game-sign.html',
  styleUrl: './game-sign.css',
})
export class GameSign implements OnInit{
  games: any[] = [];

  constructor(private GameList: GameList) { }

  ngOnInit(): void {
      this.GameList.getGames().subscribe(data => {
        this.games = data;
      });
  }
}