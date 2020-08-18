import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogModule } from '../../components/dialog/dialog.module';
import { PortraitsRoutingModule } from './portraits-routing.module';
import { PortraitsComponent } from './portraits.component';

@NgModule({
  declarations: [PortraitsComponent],
  imports: [CommonModule, PortraitsRoutingModule, DialogModule],
})
export class PortraitsModule {}
