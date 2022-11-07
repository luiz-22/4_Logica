// -------------------------------------------------- factorial --------------------------------------------------
function factorial(x) {
    if (x === 0 || x === 1) {
        return 1
    } else if (x < 0) {
        return 0            // Error, no existe factorial de números negativos
    }

    return x * factorial(x - 1)
}

console.log(factorial(4))


// -------------------------------------------------- fibonacci --------------------------------------------------

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

function fibonacci(n) {
    if (n === 0) return 0

    if (n === 1) return 1

    return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(6))