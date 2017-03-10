import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
//
import { CvComponent } from './cv/cv.component';
import { CvEditComponent } from './cv-edit/cv-edit.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login-guard';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCWLpFHpl1_6uuGTNYv_S7qU_N0e724DA0',
  authDomain: 'oleksandr-dudko-cv.firebaseapp.com',
  databaseURL: 'https://oleksandr-dudko-cv.firebaseio.com',
  storageBucket: 'oleksandr-dudko-cv.appspot.com',
  messagingSenderId: '793368161150'
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'cv', component: CvComponent },
      { path: 'cv/edit', component: CvEditComponent, canActivate: [LoginGuard] }
    ]),
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    }),
  ],
  providers: [LoginGuard],
  declarations: [CvComponent, CvEditComponent, LoginComponent],
  exports: [RouterModule]
})
export class CvModule { }
