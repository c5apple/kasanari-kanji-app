import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayModule } from './play/play.module';
import { StartModule } from './start/start.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayModule,
    StartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
