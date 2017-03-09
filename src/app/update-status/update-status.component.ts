import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent {
  updatestatus;
  userpost;
  constructor(private http: Http) {}

  update(){
    var headers = new Headers();
    var searchterm = 'status='  + this.updatestatus;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/update', searchterm, {headers: headers}).subscribe((res) => {

      this.userpost = res.json().data;
      console.log(this.userpost);
    });
  }

}
