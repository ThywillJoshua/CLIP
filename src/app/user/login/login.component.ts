import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait! We are logging you in.';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    try {
      this.showAlert = true;
      this.alertMsg = 'Please wait! We are logging you in.';
      this.alertColor = 'blue';
      this.inSubmission = true;

      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      console.error(e);

      this.inSubmission = false;
      this.alertMsg = 'Something went wrong. Try again later';
      this.alertColor = 'red';
      return;
    }

    this.alertMsg = `Success you're now logged in!`;
    this.alertColor = 'green';
  }
}
