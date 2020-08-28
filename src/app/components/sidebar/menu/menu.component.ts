import { Component } from '@angular/core';

import { DialogConfig } from './../../dialog/dialog-config';
import { DialogRef } from './../../dialog/dialog-ref';

@Component({
  selector: 'ju-menu',
  template: `
    <div class="parent">
      <nav>
        <ul role="navigation" aria-label="Menu principal">
          <li class="nav-item" *ngFor="let item of menuItems">
            <a class="nav-link" routerLinkActive="active" [routerLink]="[item.route]">
              <span class="nav-label">{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="contact">
        <div class="contact-container">
          <p class="contact-subtitle">Para orçamento, por favor, contate:</p>
          <h3>juh_said@hotmail.com</h3>
          <h3>(41) 99648-9079</h3>
          <p class="contact-subtitle">Conectar:</p>
          <label class="contact-connect">
            <a href=""> Instagram </a>
            <a href=""> VSCO </a>
          </label>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
      }

      .parent {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 0px;
        height: 100%;
      }

      nav {
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .contact {
        grid-area: 1 / 2 / 2 / 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .nav-item {
        text-align: center;
        padding: 1.75rem 0;
        transition: 0.2s ease-in-out;
      }

      .nav-item:hover {
        transform: scale(1.2);
      }

      .nav-link {
        font-weight: 700;
        font-size: 4.5rem;
      }

      .contact-subtitle {
        opacity: 0.4;
      }

      .contact-connect {
        display: inline-block;
        font-weight: 700;
      }
    `,
  ],
})
export class MenuComponent {
  menuItems = [
    { name: 'Bio', route: 'about' },
    { name: 'Trabalho', route: 'gallery' },
    { name: 'Contato', route: 'about' },
  ];

  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  onClose(): void {
    this.dialog.close();
  }
}
