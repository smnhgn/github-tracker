import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { OrgsQuery } from '../state/orgs.query';
import { OrgsService } from '../state/orgs.service';

@Component({
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class OrgListComponent implements OnInit {
  loading$ = this.orgsQuery.loading$;
  error$ = this.orgsQuery.error$;
  orgs$ = this.orgsQuery.orgs$;
  lastId$ = this.orgsQuery.lastId$;

  constructor(private orgsQuery: OrgsQuery, private orgsService: OrgsService) {}

  ngOnInit(): void {
    this.loadOrgs();
  }

  loadOrgs(lastId?: string) {
    this.orgsService.loadOrgs(lastId);
  }
}
