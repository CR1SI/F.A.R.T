import { Component, OnInit } from '@angular/core';
import { GameList } from '../game-list';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-sign',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-sign.html',
  styleUrl: './game-sign.css',
})
export class GameSign implements OnInit{
  games$!: Observable<any[]>;

  constructor(private GameList: GameList) { }

  ngOnInit(): void {
      this.games$ = this.GameList.getGames();
  }
}