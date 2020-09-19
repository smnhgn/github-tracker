import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Org } from './org.model';
import { OrgsStore } from './orgs.store';

@Injectable({ providedIn: 'root' })
export class OrgsService {
  private api = 'https://api.github.com';

  constructor(protected store: OrgsStore, private http: HttpClient) {}

  async getOrgs() {
    this.store.setError(null);
    this.store.setLoading(true);

    try {
      const orgs = await this.http.get<Org[]>(this.api + '/organizations').toPromise();
      this.store.set(orgs);
    } catch (error) {
      this.store.setError(error);
    }

    this.store.setLoading(false);
  }
}
