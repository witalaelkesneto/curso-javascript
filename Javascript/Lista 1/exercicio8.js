function recorde(pontuacoes) {
    let vetorPontos = pontuacoes.split(" ").map(Number)
    let cont = 0
    let menor = vetorPontos[0]
    let maior = vetorPontos[0]
    for (let i = 1; i < vetorPontos.length; i++) {
        if (vetorPontos[i] > maior) {
            maior = vetorPontos[i]
            cont++
        } else if (vetorPontos[i] < menor) {
            menor = vetorPontos[i]
        }
    }
    indiceMenor = vetorPontos.indexOf(menor)
    return [cont, indiceMenor + 1]
}

let pontos = "10 20 0 8 5 3 5 30 1"
console.log(recorde(pontos))

