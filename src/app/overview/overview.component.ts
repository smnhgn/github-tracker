import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { Repository } from './github/repository.interface';
import { Organization } from './github/organization.interface';
import { GithubService } from './github/github.service';

@Component({
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  private searchSubject = new Subject<string>();
  searchText$ = this.searchSubject.asObservable().pipe(
    debounceTime(500),
    distinctUntilChanged(),
    filter((text) => text && text.length >= 3)
  );
  orgs$: Observable<Organization[]>;
  repos$: Observable<Repository[]>;
  error$: Observable<HttpErrorResponse>;

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.orgs$ = this.github.getOrgs();
    this.repos$ = this.searchText$.pipe(
      switchMap((text) => this.github.getRepos(text))
    );
    this.error$ = this.github.getError();
  }

  search(text: string) {
    this.searchSubject.next(text);
  }
}
