import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
  { path: 'work', loadChildren: () => import('./features/work/work.module').then((m) => m.WorkModule) },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then((m) => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then((m) => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
