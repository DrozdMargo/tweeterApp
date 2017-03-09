import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  searchname;
  timeline;
  constructor(private http: Http) {}

  timelineCall() {
    var headers = new Headers();
    var searchname = 'query=' + this.searchname;
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/timeline', searchname, {headers: headers}).subscribe((res) => {
      this.timeline = res.json().data;
      console.log(this.timeline);
    });
  }
}
