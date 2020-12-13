import { Injectable } from '@angular/core';
import { WordsESAction } from '../../files/words/words-ES-action';
import { WordsESAnimals } from '../../files/words/words-ES-animals';
import { WordsESHard } from '../../files/words/words-ES-hard';
import { WordsESObjects } from '../../files/words/words-ES-objects';

const action = "Acción";
const objects = "Objeto";
const animals = "Animal";
const hard = "Dificil";

@Injectable({
  providedIn: 'root'
})
export class PictionaryService {

  private wordsAnimals: WordsESAnimals;
  private wordsHard: WordsESHard;
  private wordsAction: WordsESAction;
  private wordsObjects: WordsESObjects;

  private categorySelected: string;
  private indexSelected: number;

  constructor() {
    this.wordsAnimals = new WordsESAnimals();
    this.wordsHard = new WordsESHard();
    this.wordsAction = new WordsESAction();
    this.wordsObjects = new WordsESObjects();

    this.categorySelected = '';
    this.indexSelected = 0;
  }


  randomIndexAnimals(object) {
    let size: number = object.getListSize();
    return Math.floor(Math.random() * size);
  }

  returnWord(category: string) {    
    this.categorySelected = category;
    let object = this.returnObjectCategory(category);
    this.indexSelected = this.randomIndexAnimals(object);
    // console.log('index - ', this.indexSelected);
    return object.getWordByIndex(this.indexSelected);
  }

  returnObjectCategory(category) {
    switch (category) {
      case animals:
        return this.wordsAnimals;
      case hard:
        return this.wordsHard;
      case action:
        return this.wordsAction;
      case objects:
        return this.wordsObjects;
    }
  }

  finishTurn() {
    let object = this.returnObjectCategory(this.categorySelected);
    object.deleteWordInList(this.indexSelected);
  }
}
