import {Component, OnInit, Input} from '@angular/core';
import {Tweet} from "../tweets.interface";
import {TwitterService} from "../twitter-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchquery;
  errorMessage: string;
  tweets: Tweet[];
  constructor(private _TwitterService: TwitterService) {}

  searchCall(searchquery) {
    this._TwitterService.getSearch(searchquery)
      .subscribe(
        tweets => this.tweets = tweets,
        error =>  this.errorMessage = <any>error);
  }
}
