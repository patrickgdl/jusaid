import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ju-portraits',
  template: `
    <div class="grid grid-cols-5 gap-y-0 gap-x-1 h-screen">
      <div style="grid-area: 1 / 1 / 2 / 3;">
        <div class="absolute left- top-">
          <ju-logo></ju-logo>
        </div>
      </div>

      <div style="grid-area: 1 / 3 / 2 / 6; background: url('assets/img/people.png') center/cover no-repeat"></div>
    </div>
  `,
  styles: [
    `
      .logo {
        position: absolute;
        left: 40px;
        top: 80px;
      }
    `,
  ],
})
export class PortraitsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
