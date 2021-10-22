import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import {MyCounterComponent} from "./my-counter/my-counter.component";
import * as fromScoreboard from './scoreboard/scoreboard.reducer';
import {MoviesPageComponent} from "./movie/movies-page.component";

@NgModule({
  declarations: [AppComponent, MyCounterComponent, MoviesPageComponent],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer, game: fromScoreboard.reducer }),
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
