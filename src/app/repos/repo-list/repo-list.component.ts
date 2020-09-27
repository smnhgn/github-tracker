import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged, filter, map, pluck, tap, withLatestFrom } from 'rxjs/operators';
import { ReposQuery } from '../state/repos.query';
import { ReposService } from '../state/repos.service';

@UntilDestroy()
@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent implements OnInit {
  loading$ = this.reposQuery.loading$;
  error$ = this.reposQuery.error$;
  repos$ = this.reposQuery.repos$;
  form: FormGroup;

  constructor(private reposQuery: ReposQuery, private reposService: ReposService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: '',
    });

    this.form.valueChanges
      .pipe(
        untilDestroyed(this),
        debounceTime(300),
        distinctUntilChanged(),
        withLatestFrom(this.loading$),
        filter(([{ text }, loading]) => !loading && text.length >= 3),
        map(([form, _]) => form.text)
      )
      .subscribe((text) => this.reposService.searchRepo(text));
  }
}
