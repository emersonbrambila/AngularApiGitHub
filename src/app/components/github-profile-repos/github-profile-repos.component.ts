import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile-repos',
  templateUrl: './github-profile-repos.component.html',
  styleUrls: ['./github-profile-repos.component.css']
})
export class GithubProfileReposComponent implements OnInit {
  @Input() githubRepos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
