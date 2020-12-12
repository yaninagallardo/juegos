import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-time',
  templateUrl: './popup-time.component.html',
  styleUrls: ['./popup-time.component.scss']
})
export class PopupTimeComponent implements OnInit {
  @Input() public category: string = "Categoria";
  @Output() public timeFinished = new EventEmitter<any>();

  public timeOut: number = 90;

  constructor() {
  }

 setCategory(cat: string){
   this.category = cat;
 }


  ngOnInit(): void {
    this.timeOver();
  }

  @Input() timeOver() {
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



  winner(){
    let points = 0;
    if(this.timeOut < 46){
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
