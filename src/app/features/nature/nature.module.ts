import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NatureRoutingModule } from './nature-routing.module';
import { NatureComponent } from './nature.component';


@NgModule({
  declarations: [NatureComponent],
  imports: [
    CommonModule,
    NatureRoutingModule
  ]
})
export class NatureModule { }
