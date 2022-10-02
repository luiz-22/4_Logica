function BinarioADecimal(num) {
    let data = num.split("").reverse()
    let result = 0
    for (let i = 0; i < data.length; i++) {
        result += 2 ** i * data[i]
    }
    return result
}

function DecimalABinario(num) {

    let result = ''
    while (num > 0) {
      result = (num % 2) + result
      num = Math.floor(num / 2)
    }
    return result
}

console.log(BinarioADecimal('1101'))
console.log(DecimalABinario('13'))