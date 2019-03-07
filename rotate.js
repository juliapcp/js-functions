let rotate2 = function (txt, horario = true) { //por padrao será horario caso nao seja passado um valor pra algum parametro 
    //debugger; //para o codigo nesse ponto, aí ao utilizar o f9 no source ao lado do console no chrome, vemos passo a passo passando por cada linha
    //indo na margem e clicando pra ficar roxo também irá parar o codigo naquela linha ( no sources ) 
    const len = txt.length - 1;
    if (horario === true) return txt[len] + txt.substr(0, len); //se for true entra
    else return txt.substr(1,len) + txt[0];
}
console.log(rotate2('ifrs')); //sifr
console.log(rotate2('ifrs',false)); //frsi

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
    console.log('n é false'); //nao imprime
}