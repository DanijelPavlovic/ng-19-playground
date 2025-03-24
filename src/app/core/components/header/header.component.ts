import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Button} from 'primeng/button';
import {LayoutService} from '../../services/layout.service';
import {AuthService} from '../../../auth/services/auth.service';
import {Divider} from 'primeng/divider';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    Button,
    Divider,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public layoutService: LayoutService = inject(LayoutService)
  public authService: AuthService = inject(AuthService)
}
