//nome(parametro1,parametro2)
//function twice(n) { //é elevada (sempre fica no começo, o javascript coloca ela acima de tudo no documento) fora de ordem também funciona;
//  return 2 * n;
//}
let twice = function (n) {
    console.log(n)
    if (typeof (n) === 'number') return 2 * n; //colocando essa condição ele só executa quando for numero a entrada da função
    if (typeof (n) === 'string') return n + n;
    if (Array.isArray(n)) return n.concat(n);
    //o return faz com que a função pare naquele ponto
}
//esse modo de escrever a função não é elevada, não a leva pra cima no script, precisa ser colocado na ordem se não nao funciona
let x = 8;
let r = twice(x);
console.log(r); //16
console.log(twice); //lambda é o simbolo de funcao em progracao
let duasvezes = twice;
let y = [1,2];
console.log(duasvezes(5)); //10

console.log(twice('IFRS')); //IFRSIFRS
console.log(twice(new Date)); //undefined
console.log(twice(y)); // [1, 2, 1, 2]
console.log(twice(9,5,843)); //vai retornar só o primeiro
