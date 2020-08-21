import { Component } from '@angular/core';

import { DialogConfig } from './../../dialog/dialog-config';
import { DialogRef } from './../../dialog/dialog-ref';

@Component({
  selector: 'ju-menu',
  template: `
    <div class="parent">
      <div class="div1">
        <h1>First PART</h1>
      </div>
      <div class="div2">
        <h1>Second PART</h1>
      </div>
    </div>
  `,
  styles: [
    `
      .parent {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 0px;
      }

      .div1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-area: 1 / 1 / 2 / 2;
      }
      .div2 {
        grid-area: 1 / 2 / 2 / 3;
      }
    `,
  ],
})
export class MenuComponent {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  onClose(): void {
    this.dialog.close('some value');
  }
}
