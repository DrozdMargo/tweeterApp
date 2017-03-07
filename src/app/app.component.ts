import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitter Rest Api';
  searchquery = '';
  tweetsdata;
  userdata;
  searchname;
  userpost;
  searchdata;
  updatestatus;
  constructor(private http: Http) {
  }


  //
  // makeCall() {
  //   var headers = new Headers();
  //
  //   headers.append('Content-Type', 'application/X-www-form-urlencoded');
  //
  //   this.http.post('http://localhost:3000/twitter', {headers: headers}).subscribe((res) => {
  //     console.log(res);
  //   })
  // }

  searchCall() {
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.searchdata = res.json().data.statuses;
      });
  }


  update(){
    var headers = new Headers();
    var searchterm = 'status='  + this.updatestatus;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/update', searchterm, {headers: headers}).subscribe((res) => {

      this.userpost = res.json().data;
      console.log(this.userpost);
    });
  }



  favoritesCall() {
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/favorites', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data;
      // console.log(this.tweetsdata);
    });

  }


}

