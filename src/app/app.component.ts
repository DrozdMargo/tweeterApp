import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  searchquery = '';
  tweetsdata;

  constructor(private http: Http) {
  }

  makeCall() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/twitter', {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }

  searchCall() {
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/post', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data;
      console.log(this.tweetsdata);
    });
  }

  usercall(){
    var headers = new Headers();
    // var searchterm = 'screenname=Yasmin_Payne1';

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/twitter',  {headers: headers}).subscribe((res) => {
      console.log(res.json().data);

    });
  }


}
