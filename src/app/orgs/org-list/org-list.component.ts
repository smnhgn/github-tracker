import { Component, OnInit } from '@angular/core';
import { NgEntityServiceLoader } from '@datorama/akita-ng-entity-service';
import { OrgsQuery } from '../state/orgs.query';
import { OrgsService } from '../state/orgs.service';

@Component({
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.scss'],
})
export class OrgListComponent implements OnInit {
  orgs$ = this.orgsQuery.selectAll();
  loaders = this.loader.loadersFor('orgs');

  constructor(
    private orgsQuery: OrgsQuery,
    private orgsService: OrgsService,
    private loader: NgEntityServiceLoader
  ) {}

  ngOnInit(): void {
    this.orgsService.get().subscribe();
  }
}
