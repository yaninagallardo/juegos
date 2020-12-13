import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

const action = "Acción";
const objects = "Objeto";
const animals = "Animal";
const hard = "Dificil";



const comedy = "Comedia"; //rosa
const suspense = "Suspenso / Ciencia Ficción"; // naranja
const infantil = "Infantil"; //verde
const romance = "Romance"; //amarillo
const terror = "Terror"; // celeste

const roulette_4 = "assets/img/rulate-cat.png";
const roulette_5 = "assets/img/ruleta-5lados.png";

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
  @Input() public rouletteType: number = 1;
  public rouletteURL: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.rouletteType === 1) {
      this.rouletteURL = roulette_4;
    } else if (this.rouletteType === 2) {
      this.rouletteURL = roulette_5;
    }
  }

  girar() {
    if (this.activateTurn) {
      let rand = Math.random() * 4000;
      let valor = rand / 360;
      valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
      if (this.rulette) {
        this.rulette.nativeElement.style.transform = "rotate(" + rand + "deg)";
        this.startTurn.emit(true);
      }

      if (this.rouletteType == 1) {
        this.calcularPictionary(valor);
      } else if (this.rouletteType == 2) {
        this.calcularMovie(valor);
      }
    }
  }

  calcularPictionary(valor) {
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


  calcularMovie(valor) {
    setTimeout(() => {
      switch (true) {
        case valor > 0 && valor <= 72:
          console.log("suspenso");
          this.finishTurn.emit(suspense);
          break;
        case valor > 72 && valor <= 144:
          console.log("terror");
          this.finishTurn.emit(terror);
          break;
        case valor > 144 && valor <= 216:
          console.log("infantil");
          this.finishTurn.emit(infantil);
          break;
        case valor > 216 && valor <= 288:
          console.log("romance");
          this.finishTurn.emit(romance);
          break;
        case valor > 288 && valor <= 360:
          console.log("comedia");
          this.finishTurn.emit(comedy);
          break;
      }
    }, 5000);

  }
}
