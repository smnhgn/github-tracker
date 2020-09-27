import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoItemComponent } from './repo-item/repo-item.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: RepoListComponent }];

@NgModule({
  declarations: [RepoListComponent, RepoItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule, ReactiveFormsModule],
})
export class ReposModule {}
