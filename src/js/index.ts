//import { SecretWord } from "./secretWord";
import { Hangman } from "./hangman";

let div: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let btnStartGame: HTMLButtonElement = <HTMLButtonElement> document.getElementById("startGame");
let wordString: string = "Monsterhat";

//let NewSecretWord: SecretWord = new SecretWord(1, 10, 8);
//NewSecretWord.doStuff();

function DoFancyWord(parent: HTMLDivElement)
{
    for (let i of splitWord(wordString))
    {
        let letterBox: HTMLSpanElement = <HTMLSpanElement> document.createElement("span");
        letterBox.setAttribute("id", i);
        letterBox.setAttribute("class", "letterBox");
        letterBox.innerText = i;
        parent.appendChild(letterBox);
    }
}

btnStartGame.addEventListener("click", StartGame);

function StartGame(Event :MouseEvent)
{
    div.innerHTML = "";
    div.innerText = "";

    SetupWord();
    let hangman: Hangman = new Hangman();
}

function splitWord(string: string): string[]
{
    //console.log(string.split(""));
    return string.split("");
}

function SetupWord(): void
{
    let divWord = document.createElement("div");
    divWord.setAttribute("id", "word");
    div.appendChild(divWord);
    DoFancyWord(divWord);

    let inputGuess = document.createElement("input");
    inputGuess.setAttribute("id", "guess");
    inputGuess.setAttribute("placeholder", "Start Guessing..");
    div.appendChild(inputGuess);

    let canvasElement = document.createElement("canvas");
    canvasElement.setAttribute("id", "canvas");
    canvasElement.setAttribute("width", "500");
    canvasElement.setAttribute("height", "255");
    div.appendChild(canvasElement);
}