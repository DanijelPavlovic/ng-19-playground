import { Component, OnInit } from '@angular/core';
import {Menu} from 'primeng/menu';
import {NgOptimizedImage} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {ButtonDirective} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-sidebar',
  imports: [
    Menu,
    NgOptimizedImage,
    Avatar,
    Ripple
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Categories',
        icon: 'pi pi-plus',
      },

    ];
  }
}
