import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OrgsStore, OrgsState } from './orgs.store';

@Injectable({ providedIn: 'root' })
export class OrgsQuery extends QueryEntity<OrgsState> {
  orgs$ = this.selectAll();
  loading$ = this.selectLoading();
  error$ = this.selectError();
  lastId$ = this.selectLast((org) => org.id.toString());

  constructor(protected store: OrgsStore) {
    super(store);
  }
}
