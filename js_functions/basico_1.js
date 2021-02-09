
// Function Declaration
function goodMorning(){
    console.log('GOOD MORNING!')
}

goodMorning()

// Function expression
const goodAfternoon = function(){
    console.log('GOOD AFTERNOON!')
}

goodAfternoon()

let x = goodMorning() // undefined
console.log(x)


function sum(a, b = 0){
    return a + b
}

let result_sum = sum(3, 4, 5, 6, 7, 8)
console.log(result_sum)

let result_sum2 = sum(3)
console.log(result_sum2)


function multiply(a, b){
    return a * b
}

let result_multiply = multiply(3) // 3 + undefined 
console.log(result_multiply) // NaN