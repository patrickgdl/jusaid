import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[juInsertion]',
})
export class InsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
