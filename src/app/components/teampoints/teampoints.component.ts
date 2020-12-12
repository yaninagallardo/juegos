import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



interface Team {
  points: number;
  turned: boolean;
}

@Component({
  selector: 'app-teampoints',
  templateUrl: './teampoints.component.html',
  styleUrls: ['./teampoints.component.scss']
})
export class TeampointsComponent implements OnInit {
  public readonly pointMax: number = 10;
  @Input() public team1: Team ={
    points: 0,
    turned: false
  } 
  @Input() public team2: Team ={
    points: 0,
    turned: false
  } 
  @Output() public teamWinner = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.team1.turned = !this.team1.turned;
  }

  gameTurned(){
    this.team1.turned = !this.team1.turned;
    this.team2.turned = !this.team2.turned;
  }

  winner(points: number){
    if(this.team1.turned){
      this.team1.points += points;
      if(this.team1.points == this.pointMax){
        this.teamWinner.emit("Ganador Equipo 1");
      }
    } else {
      this.team2.points += points;
      if(this.team2.points == this.pointMax){
        this.teamWinner.emit("Ganador Equipo 2");
      }
    }
  }
}
