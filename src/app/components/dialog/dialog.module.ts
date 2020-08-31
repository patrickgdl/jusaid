import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogCloseComponent } from './dialog-close.component';
import { DialogContainerComponent } from './dialog-container.component';
import { DialogComponent } from './dialog.component';
import { InsertionDirective } from './insertion.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, InsertionDirective, DialogCloseComponent, DialogContainerComponent],
  entryComponents: [DialogComponent],
})
export class DialogModule {}
