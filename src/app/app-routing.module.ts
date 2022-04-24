import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersScoreComponent } from './players-score/players-score.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'players-score-component', component: PlayersScoreComponent },
  { path: 'app-component', component:AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
