import {Component, inject} from '@angular/core';
import {Card} from 'primeng/card';
import {NgClass, NgForOf} from '@angular/common';
import {LayoutService} from '../core/services/layout.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    Card,
    NgForOf,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  layoutService: LayoutService = inject(LayoutService)

  widgets = [
    {
      label: 'Total users',
      value: 200
    },
    {
      label: 'Total Subscription',
      value: 200
    },
  ]
}
