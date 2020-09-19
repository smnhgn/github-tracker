import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Org } from './org.model';
import { OrgsStore } from './orgs.store';

@Injectable({ providedIn: 'root' })
export class OrgsService {
  private api = 'https://api.github.com/organizations';

  constructor(protected store: OrgsStore, private http: HttpClient) {}

  async loadOrgs(lastId?: string) {
    this.store.reset();
    this.store.setLoading(true);
    try {
      const params = new HttpParams().set('since', lastId);
      const orgs = await this.http
        .get<Org[]>(this.api, { params })
        .toPromise();
      this.store.set(orgs);
    } catch (error) {
      this.store.setError(error);
    }
    this.store.setLoading(false);
  }
}
