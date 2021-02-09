// Anonymous function
(function (a, b, c){
    return a + b * c
})


// Function expression
const multiply = function (a, b) {
    return a * b
}

const result = multiply(6, 45)
console.log(result)

const anotherMultiply = multiply
console.log(anotherMultiply(5, 7))