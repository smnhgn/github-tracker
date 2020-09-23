import { Injectable } from '@angular/core';
import { Repo } from './repo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ReposState extends EntityState<Repo> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'repos' })
export class ReposStore extends EntityStore<ReposState> {

  constructor() {
    super();
  }

}

