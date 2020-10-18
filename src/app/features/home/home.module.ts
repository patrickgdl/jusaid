import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogModule } from '../../components/dialog/dialog.module';
import { LogoModule } from './../../components/logo/logo.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [CommonModule, HomeRoutingModule, DialogModule, LogoModule],
})
export class HomeModule {}
