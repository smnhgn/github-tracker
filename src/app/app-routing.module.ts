import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'repos', pathMatch: 'full' },
  {
    path: 'orgs',
    loadChildren: () => import('./orgs/orgs.module').then((m) => m.OrgsModule),
  },
  {
    path: 'repos',
    loadChildren: () => import('./repos/repos.module').then((m) => m.ReposModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
