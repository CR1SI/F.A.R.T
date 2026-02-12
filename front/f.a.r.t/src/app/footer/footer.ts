import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Api } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit{
  teams$!: Observable<any[]>;

  constructor(private api: Api){}

  ngOnInit(): void{
    this.teams$ =this.api.getTeams().pipe(map(teamsArray => {
        return teamsArray;
      }));
  }

}
