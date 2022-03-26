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

export const loadVocab = () => {
    fetch('hiraVocab.txt')
    .then(response => response.text())
    .then(data => {
        let output ="";
        let vocab = data.split('\r\n'); //each line is a new word
        for(let i = 0; i < vocab.length -1; i++) {
            vocab[i] = vocab[i].split(":"); //separate kana:furigana:meaning
            // "vocab[i][1]": ['vocab[i][0]','vocab[i][2]']
            output+= "'" + vocab[i][1] + "' : ['" + vocab[i][0] + "', '" + vocab[i][2] + "'], ";
        }
        console.log(output);
        return(vocab);
    })
}

export const getRandomKana = () => {
    let keys = Object.keys(kanaDict);
    return (keys[ keys.length * Math.random() << 0]);
}

export const getRandomVocab = () => {    
    let keys = Object.keys(vocabDict);
    return (keys[ keys.length * Math.random() << 0]);
}

export const generateBlocks = (gameMode) => {
    let blocks = [];
    switch(gameMode) {
        case 0: //Hiragana
            for(let i = 0; i < 9; i++) {
                blocks.push(getRandomKana());
            }
            break;
        case 1: //Katakana
            for(let i = 0; i < 9; i++) {
                blocks.push(getRandomKana());
            }
            break;
        case 2: //Vocab
            for(let i = 0; i < 9; i++) {
                blocks.push(getRandomVocab());
            }
            break;
      }

    return(blocks);
}