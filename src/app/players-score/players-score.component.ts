import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerData } from 'src/app/player.interface';
import { PlayersService } from '../players.service';
import { DetailsInterface } from '../interface/tournament';

@Component({
  selector: 'app-players-score',
  templateUrl: './players-score.component.html',
  styleUrls: ['./players-score.component.css']
})
export class PlayersScoreComponent implements OnInit {
  price: DetailsInterface [] = []
  constructor(private playersService:PlayersService ) { }

  ngOnInit(): void {
    console.log('ngOnInit')
  this.playersService.getScores()
  .subscribe((price: any) => {
    console.log('res', price )
    this.price = price
  })
  }

}