import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoItemComponent } from './repo-item/repo-item.component';

@NgModule({
  declarations: [RepoListComponent, RepoItemComponent],
  imports: [CommonModule],
})
export class ReposModule {}
