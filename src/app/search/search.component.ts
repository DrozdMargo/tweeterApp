import { Component, OnInit } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchquery = '';
  searchdata;

  constructor(private http: Http) {
  }

  searchCall() {
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.searchdata = res.json().data.statuses;
    });
  }

}
