import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Org } from './org.model';
import { OrgsStore } from './orgs.store';

@Injectable({ providedIn: 'root' })
export class OrgsService {
  private api = 'https://api.github.com/organizations';

  constructor(protected store: OrgsStore, private http: HttpClient) {}

  async loadOrgs() {
    this.store.reset();
    this.store.setLoading(true);
    try {
      const orgs = await this.http.get<Org[]>(this.api).toPromise();
      this.store.set(orgs);
    } catch (error) {
      this.store.setError(error);
    }
    this.store.setLoading(false);
  }
}
