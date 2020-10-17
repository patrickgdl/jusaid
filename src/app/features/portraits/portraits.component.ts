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

            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Expressando em imagens a beleza do mundo e das pessoas.
                </p>
                <a class="text-indigo-500 text-bold text-lg inline-flex items-center">
                  Faça seu orçamento

                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="animate-bounce-right w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
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
