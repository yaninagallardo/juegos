export class WordsESObjects {
    private wordsList: string[];

    constructor(){
        this.wordsList = [];
        this.setWordList();
    }

    setWordList() {
        let words = [
            "churro",
            "disco vinilo",
            "corpiño",
            "villero",
            "silla rota",
            "mesa rota",
            "cama volando",
            "cancion",
            "cocina",
            "parrila",
            "loco",
            "sauce lloron",
            "pizza",
            "bebe llorando",
            "flor de loto",
            "angel",
            "fuegos artificiales",
            "biblia",
            "pochoclos",
            "carpa",
            "casino",
            "bomba molotov",
            "bomba",
            "plaza de juegos",
            "agujero negro",
        ];

        this.wordsList = Object.assign([], words);
    }

    getWordList(): string[]{
        return this.wordsList;
    }

    getListSize(): number{
        return this.wordsList.length;
    }

    getWordByIndex(index: number): string{
        console.log('objeto - ', this.wordsList);
        return this.wordsList[index];
    }

    deleteWordInList(index: number){
        if(index >= 0){
            this.wordsList.splice(index, 1);
        }
        if(this.wordsList.length === 0){
            this.setWordList();
        }
    }  
}