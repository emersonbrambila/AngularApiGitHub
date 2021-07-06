import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitServicesService {

  constructor(private httpClient: HttpClient) { }

  public getProfile(userQuery: string): Observable<any[]> {
    let dataUrl = `https://api.github.com/users/${userQuery}`;
    return this.httpClient.get<any>(dataUrl);
  }

  public getRepos(userQuery: string): Observable<any> {
    let dataUrl = `https://api.github.com/users/${userQuery}/repos`;
    return this.httpClient.get<any[]>(dataUrl);
  }
}
