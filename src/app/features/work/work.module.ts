import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, WorkRoutingModule],
})
export class WorkModule {}
