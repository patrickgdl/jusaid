import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ju-portraits',
  template: `
    <div class="flex flex-wrap">
      <div class="sm:w-full md:w-full lg:w-2/5 xl:w-2/5">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <ju-logo class="absolute"></ju-logo>
            </div>

            <ju-hero></ju-hero>
          </div>
        </div>
      </div>

      <div class="sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
        <div class="h-screen" style="background: url('assets/img/people.png') center/cover no-repeat"></div>
      </div>
    </div>
  `,
})
export class PortraitsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
