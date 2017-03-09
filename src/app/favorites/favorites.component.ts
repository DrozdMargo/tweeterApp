import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  tweetslist;

  constructor(private http: Http) {}

  favoritesCall() {
    var headers = new Headers();
    // var searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/favorites',  {headers: headers}).subscribe((res) => {
      this.tweetslist = res.json().data;
      console.log(this.tweetslist);
    });
  }

}
