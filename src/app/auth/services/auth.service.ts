import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, of} from 'rxjs';
import {User} from '../types';
import {environment} from '../../../environments/environment';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL: string = environment.apiUrl;
  private TOKEN_KEY = 'auth-token';

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private http: HttpClient = inject(HttpClient)
  private messageService: MessageService = inject(MessageService)
  private router: Router = inject(Router);


  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public setUser(user: User): void {
    this.userSubject.next(user);
  }

  get authUser() {
    return this.userSubject.value;
  }

  getUser(): Observable<User | null> {
    const user: User | null = this.userSubject.getValue();

    if (user) {
      return of(user);
    }

    return this.http.get<User>(`${this.BASE_URL}/me`).pipe(
      map((response: User) => {
        this.setUser(response);
        return response
      }),
      catchError((error: any) => of(null))
    );
  }

  login(form: any): void {
    this.http.post<any>(`${this.BASE_URL}/auth/login`, {
      username: form.username,
      password: form.password,
    }).subscribe({
      next: (response) => {
        this.setToken(response.value);
        this.router.navigateByUrl('dashboard');
      }
    })
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }
}
