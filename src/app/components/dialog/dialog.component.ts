import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

import { DialogRef } from './dialog-ref';
import { InsertionDirective } from './insertion.directive';

@Component({
  selector: 'ju-dialog',
  template: `
    <div class="overlay" (click)="onOverlayClicked($event)">
      <div class="dialog" (click)="onDialogClicked($event)" [@dialogState]>
        <ng-template juInsertion> </ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialogState', [
      transition(
        'void <=> *',
        animate(
          '0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
          keyframes([
            style({ transform: 'scale(0.8) translateX(1000px)', opacity: 0, offset: 0 }),
            style({ transform: 'scale(1) translateX(0px)', opacity: 1, offset: 1.0 }),
          ])
        )
      ),
    ]),
  ],
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  // tslint:disable-next-line: variable-name
  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef, private dialogRef: DialogRef) {}

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  onOverlayClicked(evt: MouseEvent): void {
    this.dialogRef.close();
  }

  onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  onAnimationDialogEvent(event): void {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  close(): void {
    this._onClose.next();
  }
}
