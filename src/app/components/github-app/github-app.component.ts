import { Component, OnInit } from '@angular/core';
import { GitServicesService } from 'src/app/services/git-services.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubQueryUser!: string;
  public githubProfile: any;
  public githubRepos: any[] = [];

  constructor(private githubService: GitServicesService) { }

  public searchUser() {
    this.githubService.getProfile(this.githubQueryUser).subscribe((data) => {
      this.githubProfile = data;
    });

    this.githubService.getRepos(this.githubQueryUser).subscribe((data) => {
      this.githubRepos = data;
    });
  }

  ngOnInit(): void {
  }

}
