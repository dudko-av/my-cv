import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private af: AngularFire,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      debugger
    });
    debugger
    // this.af.auth.login();
  }

}
