export class WordsESHard {
    private wordsList: string[];

    constructor(){
        this.wordsList = [];
        this.setWordList();
    }

    setWordList() {
        let words = [
            "viuda",
            "casada",
            "paz",
            "punto muerto",
            "pelo sucio",
            "pulgada",
            "garabato",
            "reciclar",
            "algodon de azucar",
            "capuchino",
            "reloj digital",
            "feminista",
            "machista",
            "apostar",
            "minuto",
            "cuerda blanca",
            "lavadero",
            "geografia",
            "veneno",
            "satanas",
            "adolecente",
            "vinagre",
            "aceite",
            "galgo",
            "matematica",
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
        console.log('dificil - ', this.wordsList);
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