import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'orgs', pathMatch: 'full' },
  {
    path: 'orgs',
    loadChildren: () => import('./orgs/orgs.module').then((m) => m.OrgsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
