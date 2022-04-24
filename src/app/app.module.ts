import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersScoreComponent } from './players-score/players-score.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersService } from './players.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
