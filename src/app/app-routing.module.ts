import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'portraits',
    loadChildren: () =>
      import('./features/portraits/portraits.module').then((m) => m.PortraitsModule),
  },
  {
    path: 'travels',
    loadChildren: () =>
      import('./features/travels/travels.module').then((m) => m.TravelsModule),
  },
  {
    path: 'nature',
    loadChildren: () =>
      import('./features/nature/nature.module').then((m) => m.NatureModule),
  },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
