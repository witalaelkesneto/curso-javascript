function triangulo(a, b, c) {
    if (a == b && b == c) {
        console.log("Equilatero")
    } else if (a == b || b == c || c == a) {
        console.log("Isoceles")
    } else {
        console.log("Escaleno")
    }
}

triangulo(5,5,6)
triangulo(5,5,5)
triangulo(4,5,6)