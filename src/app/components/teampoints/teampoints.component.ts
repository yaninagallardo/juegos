import { Component, Input, OnInit } from '@angular/core';

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

  @Input() public team1: Team ={
    points: 0,
    turned: false
  } 
  @Input() public team2: Team ={
    points: 0,
    turned: false
  } 

  constructor() { }

  ngOnInit(): void {
    this.team1.turned = !this.team1.turned;
  }

  gameTurned(){
    this.team1.turned = !this.team1.turned;
    this.team2.turned = !this.team2.turned;
  }

  @Input() winner(points: number){
    if(this.team1.turned){
      this.team1.points += points;
    } else {
      this.team2.points += points;
    }
  }
}
