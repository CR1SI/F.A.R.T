import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Api } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standings.html',
  styleUrl: './standings.css',
})
export class Standings implements OnInit{
  teams$!: Observable<any[]>;

  constructor(private api: Api){}

  sortByPoints = (a: any, b:any): number => {
    const pointsA = a.points;
    const pointsB = b.points;
    if(pointsA < pointsB) {
      return 1;
    }
    if (pointsA > pointsB){
      return -1;
    }
    return 0;
  }

  ngOnInit(): void {
      this.teams$ =this.api.getTeams().pipe(map(teamsArray => {
        return teamsArray.sort(this.sortByPoints);
      }));
  }
}


