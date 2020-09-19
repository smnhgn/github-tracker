import { Injectable } from '@angular/core';
import { Org } from './org.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface OrgsState extends EntityState<Org> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'orgs', resettable: true })
export class OrgsStore extends EntityStore<OrgsState> {
  constructor() {
    super();
  }
}
