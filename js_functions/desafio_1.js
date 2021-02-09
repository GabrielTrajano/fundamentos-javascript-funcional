// sum(3)(4)(5)
function sum(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

const sumAB = sum(4)(6)
console.log(sumAB(14))
console.log(sum(9)(6)(11))


// calculate(5)(3)(fn)
// fn -> 5 * 3
// fn -> 5 + 3
// fn -> 5 - 3
function calculate(x){
    return (y) => {
        return (fn) => {
            return fn(x, y)
        }
    }
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

console.log(calculate(5)(3)(subtract))
console.log(calculate(5)(3)(multiply))