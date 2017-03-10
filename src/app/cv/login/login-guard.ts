import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire, AngularFireAuth } from 'angularfire2';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private af: AngularFire,
    private afAuth: AngularFireAuth
  ) { }

  canActivate() {  debugger
    return this.af.auth.map(auth => { debugger
      if (auth) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }

}
