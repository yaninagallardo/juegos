export class WordsESAction {
    private wordsList: string[];

    constructor(){
        this.wordsList = [];
        this.setWordList();
    }

    setWordList() {
        let words = [
            "comer",
            "soñar",
            "bañarse",
            "eructar",
            "pedo",
            "correr",
            "escuchar chisme",
            "escribir libro",
            "cocinar fideos",
            "cocinar asado",
            "cocinar sopa",
            "cocinar ensalada",
            "mujer dibujando cama",
            "mujeres hablando mal",
            "mujer hablando",
            "hombres hablando mal",
            "hombres hablando",
            "caminar por la montaña",
            "caminar por el cabaret",
            "caminar por la escuela",
            "construir monumento",
            "estudiando ingles",
            "estudiando matematica",
            "estudiando quimica",
            "limpiar culo",
            "limpiar casa",
            "limpiar patio",
            "enojado",
            "feliz",
            "triste",
            "silbar",
            "cantar",
            "agarrar picaporte",
            "corazon latiendo",

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
        console.log('accion - ', this.wordsList);
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