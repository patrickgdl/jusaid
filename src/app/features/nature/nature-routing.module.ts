import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatureComponent } from './nature.component';

const routes: Routes = [{ path: '', component: NatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureRoutingModule { }
