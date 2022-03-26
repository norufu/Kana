import React, { useRef, useEffect } from 'react'
import { newLine, drawBackgroundLines } from './GameFunctions/Background';
import { generateButtons, drawMenu } from './GameFunctions/Menu';
import { drawCanvas, drawKana, drawVocab } from './GameFunctions/Draw';
import { getRandomKana, getRandomVocab, generateBlocks, loadVocab } from './GameFunctions/List';
import { drawScore } from './GameFunctions/Score';
import { drawCard } from './GameFunctions/VocabCard';


const Canvas = props => {
  const canvasRef = useRef(null)
  const canvasW = 1500
  const canvasH = 900
  let mouseX, mouseY;
  let inMenu = true;
  let gameMode = 0; //0: hiragana, 1: katakana, 2: words
  let buttons = generateButtons(canvasW, canvasH);
  console.log(buttons);
  let backgroundLines = [];
  let score = 0;
  let lastVocab = ["Kana","Romaji","Meaning"];
  const kanaDict = {
    "a": ['あ','ア'], "i": ['い','イ'], "u": ['う','ウ'], "e": ['え','エ'], "o": ['お','オ'],
    "ka": ['か','カ'], "ki": ['き','キ'], "ku": ['く','ク'], "ke": ['け','ケ'], "ko": ['こ','コ'],
    "sa": ['さ','サ'], "shi": ['し','シ'], "su": ['す','ス'], "se": ['せ','セ'], "so": ['そ','ソ'],
    "ta": ['た','タ'], "chi": ['ち','チ'], "tsu": ['つ','ツ'], "te": ['て','テ'], "to": ['と','ト'],
    "na": ['な','ナ'], "ni": ['に','ニ'], "nu": ['ぬ','ヌ'], "ne": ['ね','ネ'], "no": ['の','ノ'],
    "ha": ['は','ハ'], "hi": ['ひ','ヒ'], "fu": ['ふ','フ'], "he": ['へ','ヘ'], "ho": ['ほ','ホ'],
    "ma": ['ま','マ'], "mi": ['み','ミ'], "mu": ['む','ム'], "me": ['め','メ'], "mo": ['も','モ'],
    "ya": ['や','ヤ'], "yu": ['ゆ','ユ'], "yo": ['よ','ヨ'],
    "ra": ['ら','ラ'], "ri": ['り','リ'], "ru": ['る','ル'], "re": ['れ','レ'], "ro": ['ろ','ロ'],
    "wa": ['わ','ワ'], "wo": ['を','ヲ'], "n": ['ん','ン'],
    "ga": ['が','ガ'], "gi": ['ぎ','ギ'], "gu": ['ぐ','グ'], "ge": ['げ','ゲ'], "go": ['ご','ゴ'],
    "za": ['ざ','ザ'], "ji": ['じ','ジ'], "zu": ['ず','ズ'], "ze": ['ぜ','ゼ'], "zo": ['ぞ','ゾ'],
    "da": ['だ','ダ'], "di": ['ぢ','ヂ'], "du": ['づ','ヅ'], "de": ['で','デ'], "do": ['ど','ド'],
    "ba": ['ば','バ'], "bi": ['び','ビ'], "bu": ['ぶ','ブ'], "be": ['べ','ベ'], "bo": ['ぼ','ボ'],
    "pa": ['ぱ','パ'], "pi": ['ぴ','ピ'], "pu": ['ぷ','プ'], "pe": ['ぺ','ペ'], "po": ['ぽ','ポ']
  }
  const vocabDict = {'suru' : ['する', 'to do'], 'desu' : ['です', 'it is'], 'nani' : ['なに', 'what'], 'watashi' : ['わたし', 'i'], 'hito' : ['ひと', 'person'], 
  'iu' : ['いう', 'to say'], 'wakaru' : ['わかる', 'to understand'], 'omae' : ['おまえ', 'you'], 'kureru' : ['くれる', 'to give'], 'sore' : ['それ', 'that one'], 
  'kore' : ['これ', 'this one'], 'are' : ['あれ', 'that one(over there)'], 'dore' : ['どれ', 'which one'], 'doko' : ['どこ', 'where'], 'koko' : ['ここ', 'here'], 
  'soko' : ['そこ', 'there'], 'anata' : ['あなた', 'you'], 'ikimasu' : ['いきます', 'to go'], 'shirimasen' : ['しりません', 'to not know'], 'toki' : ['とき', 'time'], 
  'hanaser' : ['はなせる', 'able to speak'], 'ikitai' : ['いきたい', 'want to go'], 'machimasu' : ['まちます', 'to wait'], 'daijoubu' : ['だいじょうぶ', 'its ok'], 
  'jibun' : ['じぶん', 'myself'], 'arigatou' : ['ありがとう', 'thank you'], 'konnichiha' : ['こんにちは', 'good day'], 'jikan' : ['じかん', 'time'], 
  'modoru' : ['もどる', 'to return'], 'nihongo' : ['にほんご', 'japanese'], 'onaji' : ['おなじ', 'same'], 'isshoni' : ['いっしょに', 'together'], 
  'hontouni' : ['ほんとうに', 'really?'], 'sensei' : ['せんせい', 'teacher'], 'sugiru' : ['すぎる', 'to be too much'], 'hiragana' : ['ひらがな', 'hiragana'], 
  'katakana' : ['かたかな', 'katakana'], 'kanji' : ['かんじ', 'kanji'], 'bokutachi' : ['ぼくたち', 'we'], 'shouganai' : ['しょうがない', 'it cannot be helped'], 
  'wasureta' : ['わすれた', 'forgot'], 'tomodachi' : ['ともだち', 'friend'], 'namae' : ['なまえ', 'name'], 'sushi' : ['すし', 'sushi'], 
  'gyuudon' : ['ぎゅうどん', 'beef bowl'], 'itteiru' : ['いっている', 'going'], 'okaasan' : ['おかあさん', 'mother'], 'oniichan' : ['おにいちゃん', 'brother'], 
  'ashita' : ['あした', 'tomorrow'], 'kyou' : ['きょう', 'today'], 'subete' : ['すべて', 'all'], 'doushite' : ['どうして', 'why'], 'naze' : ['なぜ', 'why'], 
  'tanoshii' : ['たのしい', 'fun'], 'suki' : ['すき', 'like'], 'kirai' : ['きらい', 'dislike'], 'genki' : ['げんき', 'healthy'], 'sayonara' : ['さよなら', 'goodbye'], 
  'kotoba' : ['ことば', 'word'], 'kankokugo' : ['かんこくご', 'korean language'], 'chuugoku' : ['ちゅうごく', 'china'], 'kimeta' : ['きめた', 'decided'], 
  'douiu' : ['どういう', 'what kind of'], 'dareka' : ['だれか', 'somebody'], 'unko' : ['うんこ', 'poop'], 'gaijin' : ['がいじん', 'foreigner'], 
  'ureshii' : ['うれしい', 'glad'], 'umae' : ['うまえ', 'delicious/good'], 'oishii' : ['おいしい', 'delicious'], 'kawaii' : ['かわいい', 'cute'], 
  'kowai' : ['こわい', 'scary'], 'rajio' : ['ラジオ', 'radio'], 'takushi-' : ['タクシー', 'taxi'], 'furaidopoteto' : ['フライドポテト', 'french fry'], 
  'ko-hi' : ['コーヒ', 'coffee'], 'pasokon' : ['パソコン', 'laptop'], 'sumaho' : ['スマホ', 'smartphone'], 'patoka-' : ['パトカー', 'patrol car'], 
  'konbini' : ['コンビニ', 'convenience store'], 'toranpu' : ['トランプ', 'cards'], 'pen' : ['ペン', 'pen'], 'makudonarudo' : ['マクドナルド', 'macdonalds'], 
  'arubaito' : ['アルバイト', 'part time job'], 'dokidoki' : ['ドキドキ', 'my heart goes dokidoki'], 'apa-to' : ['アパート', 'apartment'], 'basu' : ['バス', 'bus'], 
  'beddo' : ['ベッド', 'bed'], 'hoteru' : ['ホテル', 'hotel'], 'kappu' : ['カップ', 'cup'], 'kare-' : ['カレー', 'curry'], 'naifu' : ['ナイフ', 'knife'], 
  'shawa-' : ['シャワー', 'shower'], 'toire' : ['トイレ', 'toilet'], 'zero' : ['ゼロ', 'zero']}
  let answerBuffer = "";
  let blocks = [];


  function drawUI(ctx, canvas) {
    for(let i =0; i < answerBuffer.length; i++) { // check if answer is currently correct
      if(answerBuffer[i] == blocks[0][i]) {
        ctx.fillStyle = 'white';
      }
      else {
        ctx.fillStyle = 'red';
        break;
      }
    }
    ctx.font = '20pt Calibri';
    ctx.textAlign = 'center';
    ctx.fillText(answerBuffer, canvas.width/2, canvas.height-50);
  }

  function answerKana() { //correctly answered
    score+=1;
    if(gameMode <=1) {
      blocks.push(getRandomKana());
    }
    else if (gameMode==2) {
      lastVocab = [blocks[0], vocabDict[blocks[0]][0], vocabDict[blocks[0]][1]];
      blocks.push(getRandomVocab());
    }
    console.log("answered!")
    blocks.shift();
  }

  function keyPress(event) {
    if(event.key=="Enter") {

    }
    else if(event.key=="Backspace") {
      answerBuffer = answerBuffer.slice(0,-1);
    }
    else if(event.key=="Delete") {
      answerBuffer = "";
    }
    else {
      answerBuffer+=event.key;
    }
    if(answerBuffer==blocks[0]) {
      answerKana();
      answerBuffer="";
      return;
    }
  }

  function checkClick(){
    for(let i = 0; i < buttons.length; i++){
        if(mouseX > buttons[i].x && mouseX < buttons[i].x + buttons[i].w){
            if(mouseY > buttons[i].y && mouseY < buttons[i].y + buttons[i].h){
              inMenu=false;
              gameMode = buttons[i].value;

              blocks = generateBlocks(gameMode);
            }
        }
    }
  }

  function checkPos(mouseEvent){
    if(mouseEvent.pageX || mouseEvent.pageY == 0){
        mouseX = mouseEvent.pageX - this.offsetLeft;
        mouseY = mouseEvent.pageY - this.offsetTop;
    }else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
        mouseX = mouseEvent.offsetX;
        mouseY = mouseEvent.offsetY;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = canvasW;
    canvas.height = canvasH;
    const ctx = canvas.getContext('2d');
    let gameLoop;
    canvas.addEventListener("mousemove", checkPos);
    canvas.addEventListener("mouseup", checkClick);

    let frameCount = 0;
    //Our draw came here
    const render = () => {
      frameCount++
      if(frameCount%20 == 0) {
        backgroundLines.push(newLine(0, canvas.width)); // add a new background line every 20
      }

      drawCanvas(ctx, frameCount, canvas);
      drawBackgroundLines(ctx, backgroundLines);
      if(inMenu) { //draw menu
        drawMenu(ctx, canvas, buttons);
      }
      else { //draw game
        drawScore(ctx, canvas, score, frameCount);
        if(gameMode <=1) {
          drawKana(ctx, canvas, blocks, kanaDict, gameMode);

        }
        else if(gameMode == 2) {
          drawCard(ctx, canvas, lastVocab); //info for the last vocab you answered
          drawVocab(ctx, canvas, blocks, vocabDict);
        }
        drawUI(ctx, canvas);
      }

      gameLoop = window.requestAnimationFrame(render)
    }
    render()

    return () => {

    }
  }, [drawCanvas])
  
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    
  },[])
  
  return <div className='centerDiv'>
    <canvas ref={canvasRef} {...props}/>
  </div>

  
}

export default Canvas