import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../twitter-service.service";
import {Tweet} from "../tweets.interface";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent  {
  searchname;
  errorMessage: string;
  tweets: Tweet[];

  constructor(private _TwitterService: TwitterService) {}

  timelineCall(searchname) {
    this._TwitterService.getTimeline(searchname)
      .subscribe(
        tweets => this.tweets = tweets,
        error => this.errorMessage = <any>error);
  }
}

