export class Hangman
{
    private canvasElement: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
    private ctx = this.canvasElement.getContext("2d");
    private lineWidth: number = 4;

    constructor()
    {
    }

    private DrawHelper()
    {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
    }

    public DrawHead()
    {
        this.ctx.ellipse(245, 65, 15, 15, Math.PI / 4, 0, 2 * Math.PI);        
        this.DrawHelper();
    }

    public DrawBody()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 80);
        this.ctx.lineTo(245, 145);
        this.DrawHelper();
    }

    public DrawLeftArm()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 90);
        this.ctx.lineTo(215, 130);
        this.DrawHelper();
    }

    public DrawRightArm()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 90);
        this.ctx.lineTo(275, 130);
        this.DrawHelper();
    }

    public DrawLeftLeg()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 145);
        this.ctx.lineTo(225, 205);
        this.DrawHelper();
    }

    public DrawRightLeg()
    {
        this.ctx.beginPath();
        this.ctx.moveTo(245, 145);
        this.ctx.lineTo(265, 205);
        this.DrawHelper();
    }
}