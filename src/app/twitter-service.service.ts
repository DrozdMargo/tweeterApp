import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Tweet} from "./tweets.interface";
import {User} from "./user.interface";

@Injectable()
export class TwitterService {

  constructor( private http:Http) { }




    getTweets(): Observable<Tweet[]> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
      return this.http.get('http://localhost:3000/favorites', {headers:headers})
        .map(this.extractTweetData)
        .catch(this.handleError);
  }
  getTimeline(body: any): Observable<Tweet[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    // let body = JSON.stringify(searchname);
    return this.http.post('http://localhost:3000/timeline', body, {headers:headers})
      .map(this.extractTweetData)
      .catch(this.handleError);
  }

  getSearch(searchquery): Observable<Tweet[]> {
    let headers = new Headers();
   // let queryString =`?search=${searchquery}`;
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return this.http.get('http://localhost:3000/search'searchquery, {headers:headers})
      .map(this.extractTweetData)
      .catch(this.handleError);

  }

  private extractTweetData(res: Response) {
    let body = res.json().data;
    console.log(res.json().data);
    return body || {};
  }

  //
  // private extractUserData(res: Response) {
  //   let body = res.json();
  //   let users: User[] = [];
  //
  //   for (var item in body){
  //     let user = body[item];
  //     let userData: User = {
  //       name: user.name,
  //       location: user.location,
  //       profile_image_url: user.profile_image_url,
  //       created_at: user.created_at,
  //       followers_count: user.followers_count
  //     };
  //     users.push(userData);
  //   }
  //   return users;
  // }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
