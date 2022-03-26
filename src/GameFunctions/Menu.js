export const drawButton = (ctx, canvas, b) => {
    ctx.fillStyle = "#000000"; //button background
    ctx.fillRect(b.x, b.y, b.w, b.h);
    ctx.strokeStyle = "#F658FF" //button outlines
    ctx.strokeRect(b.x, b.y, b.w, b.h)

    let textx = b.x + b.w/2;
    let texty = b.y + b.h/2;
    ctx.fillStyle = "white"; //text

    let textOffset = 20
    let fontOffset = 7.5 //font size/4
    switch(b.value) {
        case 0: //Hiragana
            ctx.fillText("Hiragana", textx, texty + fontOffset + textOffset);
            ctx.fillText("ひらがな", textx, texty + fontOffset - textOffset);

            break;
        case 1: //Katakana
            ctx.fillText("Katakana",textx, texty + fontOffset + textOffset);
            ctx.fillText("カタカナ",textx, texty + fontOffset - textOffset);

            break;
        case 2: //Vocab
            ctx.fillText("Vocabulary",textx, texty + fontOffset + textOffset);
            ctx.fillText("たんご",textx, texty + fontOffset - textOffset);
            break;
      }
}

export const drawMenu = (ctx, canvas, buttons) => {
    ctx.font = '26px Calibri';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    for(let i = 0; i < buttons.length; i++) {
        drawButton(ctx, canvas, buttons[i]);
    }
}

export const generateButtons = (cw, ch) => {
    let buttons = [];
    let columns = 3;
    let colw = cw/columns;
    let bw = cw/5;
    let bh = ch/5;
    for(let i = 0; i < columns; i++) {
      buttons.push({x: colw - colw/2 - bw/2 + colw*i, y: ch/3, w: bw, h: bh, value: i});
    }
    return(buttons);
}
