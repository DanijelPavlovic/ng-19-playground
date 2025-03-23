import {
  CanActivate,
  Router,
} from '@angular/router';
import {inject, Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {map, Observable} from 'rxjs';
import {User} from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  private authService: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuthentication();
  }

  private checkAuthentication(): Observable<boolean> {
    return this.authService.getUser().pipe(
      map((user: User | null) => {
        if (user) {
          return true
        }
        this.router.navigate(['/auth/login']);
        return false
      })
    )
  }
}
