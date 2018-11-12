import { SecretWord } from './secretWord';

export class Guess
{
    private secretWord: string;
    public guessList: Array<string> = new Array<string>();

    constructor(secretWord: SecretWord)
    {
        this.secretWord = secretWord.Word();
    }

    public ShowGuesses(): string
    {
        return this.guessList.toString();
    }

    public DoGuess(letter: string): void
    {
        if(letter != "")
        {
            if(this.DoComparison(letter) != true)
            {
                this.guessList.push(letter);
            }
        }
    }

    public DoComparison(letter: string): boolean
    {
        this.guessList.forEach(function(value)
        {
            if(letter == value)
            {
                console.log("False");
                return false;
            }
        });

        console.log("True");
        return true;
    }
}