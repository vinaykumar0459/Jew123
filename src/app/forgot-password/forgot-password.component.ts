import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  User : UserEmail;
  constructor() { }

  ngOnInit() {
    this.User = {
      email : "",
      createpassword : "",
      confirmpassword : ""
    }
  }
  forgotpassword(User) {
    console.log(this.User)
  }

}

interface UserEmail {
  email : String;
  createpassword : String;
  confirmpassword : String;
}