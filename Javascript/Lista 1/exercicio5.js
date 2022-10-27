function arredonda(a){
    return "R$" + a.toFixed(2).replace('.', ',')
}

console.log(arredonda( 0.1 + 0.2 ))