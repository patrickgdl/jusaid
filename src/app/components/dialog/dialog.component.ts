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
    <div class="overlay two" (click)="onOverlayClicked($event)">
      <div class="dialog" (click)="onDialogClicked($event)">
        <ng-template juInsertion> </ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  // tslint:disable-next-line: variable-name
  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef
  ) {}

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
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  close(): void {
    this._onClose.next();
  }

  // containerClass = {};
  // current: string;

  // constructor() {}

  // onClick(id: string): void {
  //   this.current = id;
  //   this.containerClass = { [id]: true };
  // }

  // closeModal(): void {
  //   this.containerClass = { [this.current]: true, ['out']: true };
  // }
}
