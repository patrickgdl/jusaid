import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortraitsComponent } from './portraits.component';

const routes: Routes = [{ path: '', component: PortraitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortraitsRoutingModule { }
