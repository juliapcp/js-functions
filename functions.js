//rotate

function rotate (txt){
    const resp = `${txt.charAt(txt.length - 1)}${txt.substr(0, txt.length - 1)}`;
    return resp;
}

// se usar uma let ou const com o nome resp fora da função, ela vai funcionar porque o const para de existir fora da função

let txt = 'ifrs';
txt = rotate(txt);
console.log(txt); //sifr

//uma função encapsula um algoritmo

// entrada (parametros),
// "miolo" (corpo do algoritmo),
// saída (retorno).

txt="salame";
txt = rotate(txt);
console.log(txt); //esalam

let palavra = 'laptop';
let teste = rotate(palavra);
console.log(teste); //plapto


