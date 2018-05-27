import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ajout du module app-bootstrapp dans toute l'application
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }