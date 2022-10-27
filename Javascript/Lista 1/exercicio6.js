function jurosSimples(capInicial, taxaJuros, tempoAplicacao){
    return "R$" + (capInicial * taxaJuros * tempoAplicacao).toFixed(2).replace(".", ",")
}

function jurosComposto(capInicial, taxaJuros, tempoAplicacao){
    return "R$" + (capInicial* Math.pow(1+taxaJuros, tempoAplicacao)).toFixed(2).replace(".", ",")
}

console.log(jurosSimples(1000, 0.1, 5))
console.log(jurosComposto(1000, 0.1, 5))