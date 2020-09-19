import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrgListComponent } from './org-list/org-list.component';
import { OrgItemComponent } from './org-item/org-item.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [{ path: '', component: OrgListComponent }];

@NgModule({
  declarations: [OrgListComponent, OrgItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class OrgsModule {}
