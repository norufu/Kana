export const drawCard = (ctx, canvas, lastVocab) => {    
    let x = 1080, y = 320, w = 300, h = 200;
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, w, h);

    ctx.font = '26px Calibri';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';

    //draw text, 26 is accounting for font size
    ctx.fillText(lastVocab[1], x + w/2, y + h/3 - 26); // kana
    ctx.fillText(lastVocab[0], x + w/2, y + h/3*2 - 26); // romaji
    ctx.fillText(lastVocab[2], x + w/2, y + h - 26); // meaning
}
