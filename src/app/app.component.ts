import { Component } from '@angular/core';

@Component({
  selector: 'ju-root',
  template: `
    <div class="flex flex-wrap">
      <div class="sm:w-full md:w-full lg:w-5/6 xl:w-5/6 h-screen">
        <router-outlet></router-outlet>
      </div>

      <div class="sm:w-full md:w-full lg:w-1/6 xl:w-1/6 h-screen">
        <ju-sidebar></ju-sidebar>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'jusaid';
}
