import { Component, OnInit } from '@angular/core';

import { DialogService } from './../dialog/dialog.service';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'ju-sidebar',
  template: `
    <!-- <div class="flex items-center justify-center mt-20">
      <div class="flex items-end justify-end cursor-pointer w-24" (click)="openMenu()">
        <svg width="24" height="8" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg">
          <path id="menu" fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0V2H24V0ZM24 6H12V8H24V6Z" />
        </svg>
      </div>
    </div> -->

    <nav class="flex items-center justify-center text-right w-full h-full">
      <ul role="navigation" aria-label="Menu principal">
        <li class="my-24" *ngFor="let item of sidebarItems ">
          <a routerLinkActive="active" [routerLink]="[item.route]" class="text-lg font-normal hover:font-bold text-black text-opacity-50">
            <span class="nav-label">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarItems = [
    { name: 'Natureza', route: 'nature' },
    { name: 'Retratos', route: 'portraits' },
    { name: 'Viagens', route: 'travels' },
  ];

  constructor(private dialog: DialogService) {}

  ngOnInit(): void {}

  openMenu(): void {
    const ref = this.dialog.open(MenuComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' },
    });
  }
}
