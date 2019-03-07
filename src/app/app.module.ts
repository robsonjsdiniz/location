import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
