import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DialogModule } from './../dialog/dialog.module';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule, DialogModule],
  declarations: [SidebarComponent, MenuComponent],
  exports: [SidebarComponent],
})
export class SidebarModule {}
