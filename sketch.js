
var data;

var txt = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';

function setup() {
  noCanvas();
  //Initialize tabletop to read from google speadsheet
  Tabletop.init({
    key: '15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs',
    callback: gotData,
    simpleSheet: true
  });

  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function replacerWord(match, pos) {
  return pos;
  //var entry = random(data);
  //return entry[pos];
}


function generate() {
  console.log('generate');
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacerWord);
  createP(madlib);
}

function gotData(stuff, tabletop) {
  data = stuff;
  console.log(data);
}
