import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

const action = "Acción";
const objects = "Objeto";
const animals = "Animal";
const hard = "Dificil";

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  @ViewChild("ruleta", { static: false }) rulette: ElementRef;
  @Output() finishTurn = new EventEmitter<string>();
  @Output() startTurn = new EventEmitter<boolean>();
  @Input() public activateTurn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  girar() {
    if(this.activateTurn){
      let rand = Math.random() * 4000;
      this.calcular(rand);
    }
  }

  calcular(rand) {
    let valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    if (this.rulette) {
      this.rulette.nativeElement.style.transform = "rotate(" + rand + "deg)";
      this.startTurn.emit(true);
    }
    setTimeout(() => {
      switch (true) {
        case valor > 0 && valor <= 90:
          // console.log("accion");
        this.finishTurn.emit(action);
        break;
        case valor > 90 && valor <= 180:
          // console.log("dificil");
          this.finishTurn.emit(hard);
          break;
          case valor > 180 && valor <= 270:
            // console.log("animal");
            this.finishTurn.emit(animals);
            break;
            case valor > 270 && valor <= 360:
              // console.log("objeto");
              this.finishTurn.emit(objects);
          break;
      }
    }, 5000);

  }

}
