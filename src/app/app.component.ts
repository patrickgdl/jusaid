import { Component } from '@angular/core';

@Component({
  selector: 'ju-root',
  template: `
    <div class="parent">
      <div class="div1">
        <router-outlet></router-outlet>
      </div>
      <div class="div2">
        <ju-sidebar></ju-sidebar>
      </div>
    </div>
  `,
  styles: [
    `
      .parent {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 0px;
        height: 100vh;
      }

      .div1 {
        grid-area: 1 / 1 / 2 / 6;
      }

      .div2 {
        grid-area: 1 / 6 / 2 / 7;
      }
    `,
  ],
})
export class AppComponent {
  title = 'jusaid';
}
