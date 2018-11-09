import axios from 'axios';

export class SecretWord
{
    private baseURL: string = "http://api.evang.dk/randomwords/";
    private numWords: number;
    private maxLength: number;
    private minLength: number;
    private theWord: string;

    constructor(numWords: number, maxLength: number, minLength: number)
    {
        this.numWords = numWords;
        this.maxLength = maxLength;
        this.minLength = minLength;
    }

    public word(): string
    {
        return this.theWord;
    }

    public letters(): Array<string>
    {
        return this.theWord.split("");
    }

    async getRandomWord()
    {
        let newWord: string;

        await axios.get(this.baseURL,
        {
            'headers':
            {
                'numberOfWords': this.numWords,
                'maxWordLength': this.maxLength,
                'minWordLength': this.minLength,
            }
        })

        .then(function(response)
        {   
            newWord = response.data.words[0];
        })

        .catch(function(error)
        {
            console.log(error);
        });

        this.theWord = newWord;
        console.log(newWord);
    }
}