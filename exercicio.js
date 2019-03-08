//especificação
function mediana(idades) {
    if (idades.length % 2 !== 0) return idades[(idades.length - 1) / 2];
    else if (idades.length !== 0) return (idades[idades.length / 2] + idades[idades.length / 2 - 1]) / 2
}
const idades = [7, 15, 20, 22, 34, 40, 70];
const m = mediana(idades);
console.log(m); //22
console.assert(m === 22);
console.log(mediana([34, 40, 82]));
console.log(mediana([20, 24, 26, 40]));
console.log(mediana([1000, 2000, 3000, 4000]));
console.log(mediana([]));
console.log(mediana([123]));

console.log([2, 4, 6, 7, 9, 10, 11, 16, 18].filter(x => x > 10));

//especificação: não usar split function
function split(string, separador) {
    string += separador;
    let vet = [];
    for (let i = 0; i < string.length; i++) {
        vet.push(string.substring(0, string.indexOf(separador)));
        string = string.substring(string.indexOf(separador) + 1)
    }
    console.log(vet);

    return vet;
}
const str = 'abc,def,ghi';
const vet = split(str, ',');
console.log(vet.length === 3);
console.log(vet[0] === 'abc');
console.log(vet[1] === 'def');
console.log(vet[2] === 'ghi');
const vet2 = split(str, 'e');
console.log(vet2.length === 2);
console.log(vet2[0] === 'abc,d');
console.log(vet2[1] === 'f,ghi');