import { Component, OnInit } from '@angular/core';

import { OrgsQuery } from '../state/orgs.query';
import { OrgsService } from '../state/orgs.service';

@Component({
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.scss'],
})
export class OrgListComponent implements OnInit {
  orgs$ = this.orgsQuery.selectAll();
  loading$ = this.orgsQuery.selectLoading();
  error$ = this.orgsQuery.selectError();

  constructor(private orgsQuery: OrgsQuery, private orgsService: OrgsService) {}

  ngOnInit(): void {
    this.getOrgs();
  }

  getOrgs() {
    this.orgsService.getOrgs();
  }
}
