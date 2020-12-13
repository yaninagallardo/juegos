import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popupmovie',
  templateUrl: './popupmovie.component.html',
  styleUrls: ['./popupmovie.component.scss']
})
export class PopupmovieComponent implements OnInit {
  @Input() public movie: string = "pelicula";
  @Output() public timeFinished = new EventEmitter<any>();
public isViewActive: boolean = false;
  public timeOut: number = 90;

  constructor() {
  }

  ngOnInit(): void {
    this.timeOver();
  }
  activeView(e) {
    this.isViewActive = true;
  }

  desactiveView(e) {
    this.isViewActive = false;
  }
  timeOver() {
    let timeDefined = (this.timeOut * 10) + 5;
    let interval = setInterval(() => {
      this.timeOut--;
      if (this.timeOut === 0) {
        clearInterval(interval);
        this.timeFinished.emit({
          win: false
        });
      }
    }, timeDefined);
  }

  winners(){
    let points = 0;
    if(this.timeOut > 46){
      points = 2;
    } else{
      points = 1;
    }
    this.timeFinished.emit({
      win: true,
      points: points
    });
  }

  viewPopup(){
    this.timeOut = 90;
    this.timeOver();
  }

}
