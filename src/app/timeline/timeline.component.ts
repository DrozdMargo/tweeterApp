import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../twitter-service.service";
import {Tweet} from "../tweets.interface";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent  {
  public searchname;
  errorMessage: string;
  tweets: Tweet[];

  constructor(private _TwitterService: TwitterService) {}



  timelineCall() {
    let searchname = 'query=' + this.searchname;
    this._TwitterService.getTimeline(searchname)
      .subscribe(
        tweets => this.tweets = tweets,
        error => this.errorMessage = <any>error);
  }



}


