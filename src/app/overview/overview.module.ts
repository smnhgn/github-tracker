import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: OverviewComponent }];

@NgModule({
  declarations: [OverviewComponent, SearchBarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OverviewModule {}
