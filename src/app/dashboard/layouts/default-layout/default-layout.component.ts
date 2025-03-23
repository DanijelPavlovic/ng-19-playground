import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../../core/components/sidebar/sidebar.component';
import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet,
    ProgressBar,
    SidebarComponent,
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent  {


}
