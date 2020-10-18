import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ju-work',
  template: `
    <p>
      work works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
