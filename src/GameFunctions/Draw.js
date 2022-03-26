
export const drawCanvas = (ctx, frameCount, canvas) => {
    ctx.fillStyle = "#041c48";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


export const drawKana = (ctx, canvas, blocks, kanaDict, gameMode) => {
    for(let i = 0; i < blocks.length; i ++) {
        let bottomOffset = 100
        let w = 400;
        let h = canvas.height/10
        let x = canvas.width/2 - w/2;
        let y = canvas.height-h - bottomOffset; // 50 is the size of the base at the bottom
        ctx.beginPath();
        ctx.fillStyle = "#93c8c4";
        ctx.fillRect(x,y - i*h,w,h);

        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2c2e3b';

        ctx.strokeRect(x,y - i*h, w, h)

        ctx.font = '20pt Calibri';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(kanaDict[blocks[i]][gameMode], x +w/2, canvas.height-h/2 - i*h - bottomOffset +10);
    }
}

export const drawVocab = (ctx, canvas, blocks, vocabDict) => {
    let bottomOffset = 100
    let w = 400;
    let h = canvas.height/10
    let x = canvas.width/2 - w/2;
    let y = canvas.height-h - bottomOffset; // 50 is the size of the base at the bottom

    ctx.font = '20px Calibri';
    ctx.textAlign = 'center';

    for(let i = 0; i < blocks.length; i ++) {
        ctx.beginPath();
        ctx.fillStyle = "#93c8c4";
        ctx.fillRect(x,y - i*h,w,h);

        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2c2e3b';

        ctx.strokeRect(x,y - i*h, w, h);

        ctx.font = '20px Calibri';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';


        // console.log(first, second);
        try {
            ctx.fillText(vocabDict[blocks[i]][0], x +w/2, canvas.height-h/2 - i*h - bottomOffset +10);
          } catch (error) {
            console.error(error);
          }
        
    }
}