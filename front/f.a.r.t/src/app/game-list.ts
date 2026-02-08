import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameList {
  private apiUrl = 'https://fart-production.up.railway.app/api/';

  constructor(private http: HttpClient){ }

  getGames():Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}games/`);
  }
}
