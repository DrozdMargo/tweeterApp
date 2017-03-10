import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../twitter-service.service";
import {Tweet} from "../tweets.interface";

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent {
  userpost;
  errorMessage: string;
  tweets: Tweet[];
  constructor(private _TwitterService: TwitterService) {}

  updateStatus(userpost){
    this._TwitterService.updateTweet(userpost)
      .subscribe(
        tweets => this.tweets = tweets,
        error =>  this.errorMessage = <any>error);
  }
}
