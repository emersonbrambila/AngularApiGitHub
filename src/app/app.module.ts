import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GitServicesService } from "./services/git-services.service";

import { AppComponent } from './app.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubProfileReposComponent } from './components/github-profile-repos/github-profile-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
