import {Component, inject, OnInit} from '@angular/core';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {Ripple} from 'primeng/ripple';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Badge} from 'primeng/badge';
import {LayoutService} from '../../services/layout.service';
import {Drawer} from 'primeng/drawer';

@Component({
  selector: 'app-sidebar',
  imports: [
    Menu,
    Ripple,
    RouterLink,
    CommonModule,
    Badge,
    Drawer
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  layoutService: LayoutService = inject(LayoutService)

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: '/dashboard',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S'
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Admin',
        items: [
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Prices',
            icon: 'pi pi-dollar',
            routerLink: '/prices',
          },
          {
            label: 'Categories',
            icon: 'pi pi-dollar',
            routerLink: '/categories',
          },
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O'
          },
        ]
      },
    ];
  }
}
