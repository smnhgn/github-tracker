import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OrgsStore, OrgsState } from './orgs.store';

@Injectable({ providedIn: 'root' })
export class OrgsQuery extends QueryEntity<OrgsState> {
  constructor(protected store: OrgsStore) {
    super(store);
  }
}
