import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupTimeComponent } from '../popup-time/popup-time.component';

@Component({
  selector: 'app-pictionary',
  templateUrl: './pictionary.component.html',
  styleUrls: ['./pictionary.component.scss']
})
export class PictionaryComponent implements OnInit {

  @ViewChild("popuptime", { static: false }) popup: PopupTimeComponent;
  public isViewActive: boolean = false;
  public isStartDrawing: boolean = false;
  public category: string = "Gire la Ruleta";
  public newCategory: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  activeView(e) {
    this.isViewActive = true;
  }

  desactiveView(e){
    this.isViewActive = false;
  }

  turnResult(e){
    this.category = e;
    this.newCategory = true;
    // this.popup?.setCategory(e);
  }
  
  setResult(e){
    this.category = "Girando...";
  }

  startDrawing(){
    this.isStartDrawing = true;
    this.popup?.viewPopup();
  }

  timeFinished(e){
    if(e){
      
    }
    this.newCategory = false;
    this.isStartDrawing = false;

  }
}
