import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Tweet} from "./tweets.interface";


@Injectable()
export class TwitterService {

  constructor( private http:Http) { }

  getTweets(): Observable<Tweet[]> {
    return this.http.get('http://localhost:3000/favorites', {headers:this.getHeaders()})
      .map(this.extractTweetDataFavorites)
      .catch(this.handleError);
  }
  getTimeline(searchname): Observable<Tweet[]> {
    const queryString =`screen_name=${searchname}`;
    return this.http.post('http://localhost:3000/timeline', queryString, {headers:this.getHeaders()})
      .map(this.extractTweetDataFavorites)
      .catch(this.handleError);
  }

  getSearch(searchquery): Observable<Tweet[]> {
    const queryString =`query=${searchquery}`;
    return this.http.post('http://localhost:3000/search', queryString, {headers:this.getHeaders()})
      .map(this.extractTweetData)
      .catch(this.handleError);
  }
  updateTweet(userpost): Observable<Tweet[]> {
    const queryString =`status=${userpost}`;
    return this.http.post('http://localhost:3000/update', queryString, {headers:this.getHeaders()})
      .map(this.extractTweetData)
      .catch(this.handleError);
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return headers;
  }
  private extractTweetData(res: Response) {
    let body = res.json().data.statuses;
    console.log(body);
    return body || {};
  }
  private extractTweetDataFavorites(res: Response) {
    let body = res.json().data;
    console.log(body);
    return body || {};
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
