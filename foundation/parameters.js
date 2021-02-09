
function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5, 6)
logParams(1, 2, 3)
logParams(1, 2)

function defaultParams(a, b, c = 42){
    console.log(a, b, c)
}

defaultParams(4, 5, 6)
defaultParams(2, 4)
defaultParams()

// Esperando um array como parametro:
function logNumsArr(nums){
    for(let n of nums){
        console.log(n)
    }
}

logNumsArr([2, 3, 4, 5, 6, 7])

// Spread/Rest Operator
function logNums(...nums){
    console.log(nums)
}

logNums(10, 20, 30, 40, 50, 60)


function sumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n
    }
    return console.log(total)
}

sumAll(1, 2, 3, 4, 5, 6, 7, 8)