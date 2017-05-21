import { Http } from '@angular/http';  
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookService {

  private accessToken = '1349113621811240|WFrb_x0uN60ayytjdiJR0DOCp4Q';

  private graphUrl = 'https://graph.facebook.com/';
  private graphQuery:string;

  constructor(private http: Http) { }

  getPosts(pageName: string): Observable<any[]> {
    this.graphQuery = `?access_token=${this.accessToken}&date_format=U&fields=posts{from,created_time,message,attachments}`;
    let url = this.graphUrl + pageName + this.graphQuery;

    return this.http
        .get(url)
        .map(response => response.json().posts.data);
   }

    getEvents(pageName: string): Observable<any[]> {
    this.graphQuery = `?access_token=${this.accessToken}&date_format=U&fields=events{description,end_time,start_time,name}`;
    let url = this.graphUrl + pageName + this.graphQuery;

    return this.http
        .get(url)
        .map(response => response.json().events.data);
   }
}