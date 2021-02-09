function goodMorning(){
    console.log('Bom dia!')
}

const goodAfternoon = () => console.log('Boa tarde!')

// 1. Passar uma função como parâmetro para outra função
function runAnything(fn){
    if (typeof(fn) === 'function'){
        fn()
    }
}

runAnything(7)
runAnything(goodMorning)
runAnything(goodAfternoon)


// 2. Retornar uma função a partir de uma outra função
function exponentiation(base){
    return function(exp) {
        return Math.pow(base, exp)
    }
}
const powerOf2 = exponentiation(2)
console.log(powerOf2(8))

console.log(exponentiation(2)(4))