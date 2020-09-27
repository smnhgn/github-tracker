import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../state/repo.model';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss'],
})
export class RepoItemComponent implements OnInit {
  @Input() repo: Repo;

  constructor() {}

  ngOnInit(): void {}
}
