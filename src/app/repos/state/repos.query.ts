import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ReposStore, ReposState } from './repos.store';

@Injectable({ providedIn: 'root' })
export class ReposQuery extends QueryEntity<ReposState> {
  repos$ = this.selectAll();
  loading$ = this.selectLoading();
  error$ = this.selectError();

  constructor(protected store: ReposStore) {
    super(store);
  }
}
