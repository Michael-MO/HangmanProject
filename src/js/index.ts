import { SecretWord } from "./secretWord";
import { Hangman } from "./hangman";
import { Guess } from "./guess";

let div: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let btnStartGame: HTMLButtonElement = <HTMLButtonElement> document.getElementById("startGame");
btnStartGame.addEventListener("click", StartGame);

// After Start
let divWord: HTMLDivElement;
let inputGuess: HTMLInputElement;
let btnGuess: HTMLButtonElement;
let canvasElement: HTMLCanvasElement;
// ......

function DoFancyWord(parent: HTMLDivElement, string: string)
{
    splitWord(string).forEach(function(value, i)
    {
        let letterBox: HTMLSpanElement = <HTMLSpanElement> document.createElement("span");
        letterBox.setAttribute("id", i.toString());
        letterBox.setAttribute("class", "letterBox");
        parent.appendChild(letterBox);
    });
}

async function StartGame(Event :MouseEvent)
{
    div.innerHTML = "";
    div.innerText = "";

    let NewSecretWord: SecretWord = new SecretWord(1, 10, 8);
    await NewSecretWord.getRandomWord();
    SetupWord(NewSecretWord.word());
    let hangman: Hangman = new Hangman();
    let guess: Guess = new Guess(NewSecretWord);
    btnGuess.addEventListener("click", function(){
        divWord.innerText = guess.Guesses();
    });
}

function splitWord(string: string): string[]
{
    return string.split("");
}

function SetupWord(string: string): void
{
    divWord = document.createElement("div");
    divWord.setAttribute("id", "word");
    div.appendChild(divWord);
    DoFancyWord(divWord, string);

    inputGuess = document.createElement("input");
    inputGuess.setAttribute("id", "guess");
    inputGuess.setAttribute("placeholder", "Start Guessing..");
    div.appendChild(inputGuess);

    btnGuess = document.createElement("button");
    btnGuess.setAttribute("id", "btnGuess");
    btnGuess.innerText = "Make A Guess";
    div.appendChild(btnGuess);

    canvasElement = document.createElement("canvas");
    canvasElement.setAttribute("id", "canvas");
    canvasElement.setAttribute("width", "500");
    canvasElement.setAttribute("height", "255");
    div.appendChild(canvasElement);
}