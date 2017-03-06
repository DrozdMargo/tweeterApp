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
  constructor(private http: Http) {
  }

  makeCall() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }

  searchCall() {
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }

  usercall(){
    var headers = new Headers();
    var searchterm = 'screenname=' + this.searchname;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/user', searchterm, {headers: headers}).subscribe((res) => {
      console.log(res.json().data);
      this.userdata = res.json().data;

    });
  }
  update(){
    var headers = new Headers();
    var searchterm = 'status=jghirtu';

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/update', searchterm, {headers: headers}).subscribe((res) => {
      console.log(res.json().data);

    });
  }
}
