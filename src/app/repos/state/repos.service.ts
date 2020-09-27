import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { pluck } from 'rxjs/operators';
import { ReposStore } from './repos.store';
import { RepoSearchResult } from './repo.model';

@Injectable({ providedIn: 'root' })
export class ReposService {
  private api = 'https://api.github.com/search/repositories';

  constructor(protected store: ReposStore, private http: HttpClient, private loading: LoadingController) {
    this.store.setLoading(false);
  }

  async searchRepo(text: string) {
    this.store.reset();
    this.store.setLoading(true);
    const loading = await this.loading.create({
      message: 'Loading Repositories...',
    });
    await loading.present();

    try {
      const params = new HttpParams().set('q', text);
      const repos = await this.http
        .get<RepoSearchResult>(this.api, { params })
        .pipe(pluck('items'))
        .toPromise();
      this.store.set(repos);
    } catch (error) {
      this.store.setError(error);
    }
    this.store.setLoading(false);
    await loading.dismiss();
  }
}
