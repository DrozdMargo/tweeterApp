import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../twitter-service.service";
import {Tweet} from "../tweets.interface";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
  errorMessage: string;
  tweets: Tweet[];

  constructor(private _TwitterService: TwitterService) { }

  ngOnInit() {
    this._TwitterService.getTweets()
      .subscribe(
        tweets => this.tweets = tweets,
        error =>  this.errorMessage = <any>error);
  }
}
