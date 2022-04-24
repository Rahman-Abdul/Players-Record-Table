import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PlayerData} from  'src/app/player.interface';
import { map } from 'rxjs/operators';
import { DetailsInterface } from './interface/tournament';




@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }
  getPlayers(): Observable<PlayerData> {
    return this.http.get<PlayerData>('https://61e2d92b3050a100176822c8.mockapi.io/api/v1/PlayersByScore')



  }
  getScores():Observable<DetailsInterface> {
    return this.http.get<DetailsInterface>('https://61e2d92b3050a100176822c8.mockapi.io/api/v1/tournaments')
}
}
