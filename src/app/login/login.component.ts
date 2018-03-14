import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  User : Logindetails;
  constructor() { }

  ngOnInit() {
    this.User = {
      email : "",
      password : ""
    }
  }
  loginform(User) {
    console.log(this.User)
  }

}

interface Logindetails {
  email : String;
  password : String;
}