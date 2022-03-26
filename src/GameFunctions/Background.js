export const drawBackgroundLines = (ctx, lines) => {
    for(let i = 0; i < lines.length; i++) {
        ctx.strokeStyle = lines[i].colour;
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(lines[i].x, lines[i].y);
        ctx.lineTo(lines[i].x, lines[i].y+lines[i].height);
        ctx.stroke();
        lines[i].y+=1;
    }
}

export const newLine = (min, max) =>{
    let x = Math.floor((Math.random() * max) + min);
    let colour = Math.floor((Math.random() * 3) + 1);
    let height = Math.floor((Math.random() * 300) + 10);
    let y = 0 - height;

    switch(colour) {
        case 1:
            colour = "#b16eb5"; 
            break;
        case 2:
            colour = "#de41cd"; 
            break;
        case 3:
            colour = "#0b4abd"; 
            break;
    }
    return {x: x, y: y, colour: colour, height: height};
}

