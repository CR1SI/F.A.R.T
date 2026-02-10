import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'https://fart-production.up.railway.app/api/';

  constructor(private http: HttpClient){}

  getTeams():Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}teams/`);
  }

  getChatHistory():Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}chat_history/`)
  }

  sendMessage(content: string): Observable<any> {
    const body = { content: content }
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });

    return this.http.post(`${this.apiUrl}send_msg/`, body, { headers });
  }
}
