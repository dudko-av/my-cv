import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { TranslateModule } from 'ng2-translate';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

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
    AngularFireModule.initializeApp(firebaseConfig),
    TranslateModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
