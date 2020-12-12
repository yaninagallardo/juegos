import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupTimeComponent } from '../popup-time/popup-time.component';
import { TeampointsComponent } from '../teampoints/teampoints.component';
import { PictionaryService } from './pictionary.service';

@Component({
  selector: 'app-pictionary',
  templateUrl: './pictionary.component.html',
  styleUrls: ['./pictionary.component.scss']
})
export class PictionaryComponent implements OnInit {

  @ViewChild("popuptime", { static: false }) popup: PopupTimeComponent;
  private teamspoints: TeampointsComponent;
  @ViewChild("teamspoints", { static: false })
  set teams(teams: TeampointsComponent) {
    try {
      this.teamspoints = teams;
    } catch { }
  };
  public isViewActive: boolean = false;
  public isStartDrawing: boolean = false;
  public category: string = "Gire la Ruleta";
  public newCategory: boolean = false;
  public viewWinner: boolean = false;
  public wordRandom: string = '';
  public teamwinner: string = '';

  constructor(private pictonaryService: PictionaryService) { }

  ngOnInit(): void {
  }
  activeView(e) {
    this.isViewActive = true;
  }

  desactiveView(e) {
    this.isViewActive = false;
  }

  turnResult(e) {
    this.category = e;
    this.newCategory = true;
    this.wordRandom = this.pictonaryService.returnWord(this.category);
    // this.popup?.setCategory(e);
  }

  winnerteam(event){
    this.teamwinner = event;
    this.viewWinner = true;
  }

  setResult(e) {
    this.category = "Girando...";
  }

  startDrawing() {
    this.isStartDrawing = true;
    this.popup?.viewPopup();
  }

  timeFinished(e) {
    if (e) {
      this.teamspoints.winner(e.points);
    }
    this.newCategory = false;
    this.isStartDrawing = false;
    this.pictonaryService.finishTurn();
    this.teamspoints.gameTurned();
    this.popup?.viewPopup();
    this.wordRandom = 'Gire la Ruleta...';
  }
}
