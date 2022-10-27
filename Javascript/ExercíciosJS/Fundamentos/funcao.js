function rand(min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand(20, 40))

d1 = new Date();
console.log(d1)