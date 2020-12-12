import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { PopupTimeComponent } from './components/popup-time/popup-time.component';
import { TeampointsComponent } from './components/teampoints/teampoints.component';
import { PictionaryComponent } from './components/pictionary/pictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    PopupTimeComponent,
    TeampointsComponent,
    PictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
