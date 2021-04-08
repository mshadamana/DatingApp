import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users: any;
  constructor(private _http: HttpClient) {
   
    
  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this._http.get('https://localhost:44330/api/users').subscribe(res => {
        this.users =res;
    },
    error => {
        console.log(error);
    }
    )
  }
  
}
