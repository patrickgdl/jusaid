import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortraitsRoutingModule } from './portraits-routing.module';
import { PortraitsComponent } from './portraits.component';


@NgModule({
  declarations: [PortraitsComponent],
  imports: [
    CommonModule,
    PortraitsRoutingModule
  ]
})
export class PortraitsModule { }
