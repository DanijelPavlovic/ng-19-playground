import { Routes } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {DefaultLayoutComponent} from './dashboard/layouts/default-layout/default-layout.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {LoginComponent} from './auth/components/login/login.component';

export const routes: Routes = [

  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    // TODO: lazy load
    children: [
      {path: 'dashboard', component: DashboardComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];
