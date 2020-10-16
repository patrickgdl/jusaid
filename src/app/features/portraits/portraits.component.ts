import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ju-portraits',
  template: `
    <div class="flex flex-wrap">
      <div class="sm:w-full md:w-full lg:w-2/5 xl:w-2/5">
        <ju-logo></ju-logo>
      </div>

      <div class="sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
        <div class="h-screen" style="background: url('assets/img/people.png') center/cover no-repeat"></div>
      </div>
    </div>
  `
})
export class PortraitsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
