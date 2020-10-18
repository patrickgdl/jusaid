import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ju-hero',
  template: `
    <div class="flex flex-col sm:flex-row mt-10">
      <div class="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <p class="leading-relaxed text-xl mb-4">Expressando em imagens a beleza do mundo e das pessoas.</p>
        <a class="text-indigo-500 font-bold text-xl inline-flex items-center">
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
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
