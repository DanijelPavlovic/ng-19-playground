import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../../core/components/sidebar/sidebar.component';
import {ProgressBar} from 'primeng/progressbar';
import {LoadingService} from '../../../core/services/loading.service';
import {NgIf} from '@angular/common';
import {Card} from 'primeng/card';
import {HeaderComponent} from '../../../core/components/header/header.component';
import {LayoutService} from '../../../core/services/layout.service';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet,
    ProgressBar,
    SidebarComponent,
    NgIf,
    Card,
    HeaderComponent,
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {
  public loadingService: LoadingService = inject(LoadingService)
  public layoutService: LayoutService = inject(LayoutService)
}
