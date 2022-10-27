function funcao(a, b, c){
    let delta = Math.pow(b,2) - 4 * a * c
    if(delta < 0){
        return "Delta é negativo"
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        let resultados = [x1, x2]
        return resultados
    }
}

console.log(funcao(1, -1, -6))