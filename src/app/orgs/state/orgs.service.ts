import { Injectable } from '@angular/core';
import { OrgsStore, OrgsState } from './orgs.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
export class OrgsService extends NgEntityService<OrgsState> {
  constructor(protected store: OrgsStore) {
    super(store);
  }
}
