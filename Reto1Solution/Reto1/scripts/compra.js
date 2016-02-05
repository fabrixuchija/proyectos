var m = 0;
var p = 0;
var n = 0;
var na = 12;
var man = 3;
var pe = 7;

function initialize() {
    document.getElementById('btnN')
        .addEventListener('click', addN, false);
    document.getElementById('btnP')
    .addEventListener('click', addP, false);
    document.getElementById('btnM')
    .addEventListener('click', addM, false);
    document.getElementById('maS').innerText = man;
    document.getElementById('peS').innerText = pe;
    document.getElementById('naS').innerText = na;
}

function addN(){
    if (na > 0) {
        n++;
        na--;
        document.getElementById('naC').innerText = n;
        document.getElementById('naS').innerText = na;
    } else
        alert('ya no puedes comprar naranjas');
}

function addM() {
    
    
    if (man > 0) {
        m++;
        man--;
        document.getElementById('maC').innerText = m;
        document.getElementById('maS').innerText = man;
    } else
        alert('ya no puedes comprar manzanas');
}

function addP(){
     if (pe > 0) {
    p++;
    pe--;
    document.getElementById('peC').innerText = p;
    document.getElementById('peS').innerText = pe;
} else
        alert('ya no puedes comprar peras');
}