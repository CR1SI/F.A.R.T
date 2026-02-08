import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap, BehaviorSubject, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/';
  private isBrowser: boolean;

  private loggedIn: BehaviorSubject<boolean>;
  isLoggedIn$: Observable<boolean>;

  private currentUser = new BehaviorSubject<any>(null);
  user$ = this.currentUser.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    const hasToken = this.isBrowser ? !!localStorage.getItem('auth_token') : false;

    this.loggedIn = new BehaviorSubject<boolean>(hasToken);
    this.isLoggedIn$ = this.loggedIn.asObservable();

    if (hasToken){
      this.fetchProfile().subscribe({
        error: () => this.logout()
      });
    }
  }

  fetchProfile(){
    return this.http.get(`${this.apiUrl}api/profiles/me/`).pipe(
      tap(profile => this.currentUser.next(profile))
    );
  }

  register(userData: any){
    return this.http.post(`${this.apiUrl}api/register/`, userData).pipe(
      switchMap((res: any) => {
        this.setSession(res.token);
        return this.fetchProfile();
      })
    );
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}api-token-auth/`, credentials).pipe(
      switchMap((res: any) => {
        this.setSession(res.token);
        return this.fetchProfile();
      })
    );
  }

  private setSession(token: string) {
    if (this.isBrowser) {
      localStorage.setItem('auth_token', token);
      this.loggedIn.next(true);
    }
  }

  logout() {
    if(this.isBrowser){
      localStorage.removeItem('auth_token');
      this.loggedIn.next(false);
      this.currentUser.next(null);
    }
  }

  updateProfile(profileData: {display_name?: string; pfp?: File}) {
    const formData = new FormData();

    if(profileData.display_name){
      formData.append('display_name', profileData.display_name);
    }
    if(profileData.pfp){
      formData.append('pfp', profileData.pfp);
    }

    return this.http.patch(`${this.apiUrl}api/profiles/me/`, formData).pipe(
      tap((updatedProfile) => {
        this.currentUser.next(updatedProfile);
      })
    );
  }
}
