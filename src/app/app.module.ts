import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Jamstackgr2LibraryModule } from 'jamstackgr2-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Jamstackgr2LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
