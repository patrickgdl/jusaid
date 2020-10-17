import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogModule } from '../../components/dialog/dialog.module';
import { LogoModule } from './../../components/logo/logo.module';
import { PortraitsRoutingModule } from './portraits-routing.module';
import { PortraitsComponent } from './portraits.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [PortraitsComponent, HeroComponent],
  imports: [CommonModule, PortraitsRoutingModule, DialogModule, LogoModule],
})
export class PortraitsModule {}
