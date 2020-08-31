import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ju-dialog-container',
  template: `
    <div
      class=" relative dialog bg-white h-screen w-screen flex flex-col p-5 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      (click)="onDialogClicked($event)"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .dialog {
        animation: scaleRight 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }

      .out {
        .dialog {
          animation: scaleLeft 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
      }

      @keyframes scaleRight {
        0% {
          transform: scale(0.8) translateX(1000px);
          opacity: 0;
        }
        100% {
          transform: scale(1) translateX(0px);
          opacity: 1;
        }
      }

      @keyframes scaleLeft {
        0% {
          transform: scale(1) translateX(0px);
          opacity: 1;
        }
        100% {
          transform: scale(0.8) translateX(1000px);
          opacity: 0;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }
}
