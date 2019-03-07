let rotate = function (txt, horario = true) { //por padrao será horario caso nao seja passado um valor pra algum parametro 
    const len = txt.length - 1;
    if (horario === true) return txt[len] + txt.substr(0, len); //se for true entra
    else return txt.substr(1,len) + txt[0];
}
console.log(rotate('ifrs')); //sifr
console.log(rotate('ifrs',false)); //frsi

//o que é falso:
//false
//null
//undefined
//0
//NaN
//''

const v = 3;
if (v) {
    console.log('v é true');
}
//colocar if(variavel) avalia uma variavel como true or false
const n = '';
if (n) {
    console.log('n é false');
}