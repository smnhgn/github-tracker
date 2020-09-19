import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Repository } from './repository.interface';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Organization } from './organization.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private api = 'https://api.github.com/';
  private errorSubject = new Subject<HttpErrorResponse>();
  private error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  getError() {
    return this.error$;
  }

  getOrgs(since?: string): Observable<Organization[]> {
    const orgApi = this.api + 'organizations';
    const params = {};

    if (since) {
      params['since'] = since;
    }

    return this.http
      .get<Organization[]>(orgApi, {
        params,
        headers: {
          accept: 'application/vnd.github.v3+json',
        },
      })
      .pipe(
        tap(() => this.errorSubject.next()),
        catchError((error) => {
          this.errorSubject.next(error);
          return of([]);
        })
      );
  }

  getRepos(org: string): Observable<Repository[]> {
    const repoApi = this.api + 'orgs/' + org + '/repos';
    return this.http.get<Repository[]>(repoApi).pipe(
      tap(() => this.errorSubject.next()),
      catchError((error) => {
        this.errorSubject.next(error);
        return of([]);
      })
    );
  }
}
