import { Component, OnInit } from '@angular/core';

import { DialogService } from './../dialog/dialog.service';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'ju-sidebar',
  template: `
    <svg
      (click)="openMenu()"
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="menu"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 0H0V2H24V0ZM24 6H12V8H24V6Z"
        fill="#191919"
      />
    </svg>
    <nav>
      <ul class="nav-list" role="navigation" aria-label="Menu principal">
        <li class="nav-item" *ngFor="let item of sidebarItems">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="[item.route]"
          >
            <span class="nav-label">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      svg {
        float: right;
        padding-right: 50px;
        padding-top: 50px;
      }

      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 70px);
      }

      .nav-list {
      }

      .nav-item {
        text-align: right;
        padding: 60px 0;
      }

      .nav-link {
        font-size: 1.125rem;
      }

      .nav-link.active {
        font-weight: bold;
        font-size: 1.5rem;
      }
    `,
  ],
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

    ref.afterClosed.subscribe((result) => {
      console.log('Dialog closed', result);
    });
  }
}
