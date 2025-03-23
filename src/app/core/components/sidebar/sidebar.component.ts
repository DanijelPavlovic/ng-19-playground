import { Component, OnInit } from '@angular/core';
import {Menu} from 'primeng/menu';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {ButtonDirective} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import {Ripple} from 'primeng/ripple';
import {Badge} from 'primeng/badge';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    Menu,
    NgOptimizedImage,
    Avatar,
    Ripple,
    Badge,
    NgIf,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Documents',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: 'dashboard',
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
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O'
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q'
          }
        ]
      },
    ];
  }
}
