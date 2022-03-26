export const drawScore = (ctx, canvas, score, frameCount) => {    
    let x = 1080, y = 100, w = 300, h = 200;
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, w, h);

    ctx.font = '20pt Calibri';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText("Score: " +score, x + w/2, y + h/2);
}
