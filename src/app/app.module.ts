import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { TranslateModule } from 'ng2-translate';
import { MaterialModule } from '@angular/material';
//
import { AppComponent } from './app.component';
//
import { AppRoutesModule } from './app.routes.module';
import { LayoutModule } from './layout/layout.module';
import { CvModule } from './cv/cv.module';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCWLpFHpl1_6uuGTNYv_S7qU_N0e724DA0',
  authDomain: 'oleksandr-dudko-cv.firebaseapp.com',
  databaseURL: 'https://oleksandr-dudko-cv.firebaseio.com',
  storageBucket: 'oleksandr-dudko-cv.appspot.com',
  messagingSenderId: '793368161150'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    AppRoutesModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    }),
    TranslateModule.forRoot(),
    MaterialModule,
    //
    LayoutModule,
    CvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
