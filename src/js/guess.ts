import { SecretWord } from './secretWord';

export class Guess
{
    private secretWord: string;
    public guessList: Array<string> = ["A", "B"];

    constructor(secretWord: SecretWord)
    {
        this.secretWord = secretWord.word();
    }

    public Guesses(): string
    {
        return this.guessList.toString();
    }
}