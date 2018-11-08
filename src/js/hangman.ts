
export class Hangman
{
    private canvasElement: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
    private ctx = this.canvasElement.getContext("2d");
    private lineWidth: number = 4;

    constructor()
    {
        this.drawHead();
        this.drawBody();
        this.drawLeftArm();
        this.drawRightArm();
        this.drawLeftLeg();
        this.drawRightLeg();
    }

    private drawHelper()
    {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
    }

    private drawHead()
    {
        this.ctx.ellipse(245, 65, 15, 15, Math.PI / 4, 0, 2 * Math.PI);        
        this.drawHelper();
    }

    private drawBody()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 80);
        this.ctx.lineTo(245, 145);
        this.drawHelper();
    }

    private drawLeftArm()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 90);
        this.ctx.lineTo(215, 130);
        this.drawHelper();
    }

    private drawRightArm()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 90);
        this.ctx.lineTo(275, 130);
        this.drawHelper();
    }

    private drawLeftLeg()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 145);
        this.ctx.lineTo(225, 205);
        this.drawHelper();
    }

    private drawRightLeg()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 145);
        this.ctx.lineTo(265, 205);
        this.drawHelper();
    }
}