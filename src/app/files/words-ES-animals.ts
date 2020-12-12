export class WordsESAnimals {
    private wordsList: string[];

    constructor(){
        this.wordsList = [];
        this.wordsList = Object.assign([], this.setWordList());
    }

    setWordList():string [] {
        let words = [
            "oso",
            "panda",
            "perro",
            "gato",
            "cocodrilo",
            "pajaro",
            "unicornio",
            "babosa",
            "ballena",
            "caballito de mar",
            "caballo",
            "camaleon",
            "delfin",
            "canguro",
            "cangrejo",
            "caracol",
            "castor",
            "tigre",
            "pez gato",
            "burro",
            "abeja",
            "conejo",
            "avestruz",
            "estrella de mar",
            "garrapata",
            "pato",
            "gallina",
            "vaca",
            "toro",
            "hormiga",
            "tigre",
            "leon",
            "loro",
            "lombriz",
            "luciernaga",
            "mamut",
            "mantis religiosa",
            "zorrino",
            "mosca",
            "mono",
            "perezoso",
            "pulpo",
            "piojo",
            "rana",
            "raton",
            "serpiente",
            "tortuga",
            "zebra",
        ];

        return words;
    }

    getWordList(): string[]{
        return this.wordsList;
    }

    getListSize(): number{
        return this.wordsList.length;
    }

    getWordByIndex(index: number): string{
        console.log('animal - ', this.wordsList);
        return this.wordsList[index];
    }

    deleteWordInList(index: number){
        if(index >= 0){
            this.wordsList.splice(index, 1);
        }
    }


    
}