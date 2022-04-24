import { Component, } from '@angular/core';
import {PlayerData} from 'src/app/player.interface'
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: PlayerData [] = []
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    console.log('ngOnInit')
  this.http.get('https://61e2d92b3050a100176822c8.mockapi.io/api/v1/PlayersByScore')
  .subscribe((players: any) => {
    console.log('res', players)
    this.players = players
  })
  }
}
