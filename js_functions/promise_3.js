function generateNumBetween(min, max){
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve =>{
        setTimeout(function() {
            const fator = max - min + 1
            const randomNum = parseInt(Math.random() * fator) + min
            resolve(randomNum)
        })
    })
}

function generateSeveralNums(){
    return Promise.all([
        generateNumBetween(1, 40, 4000),
        generateNumBetween(1, 40, 1000),
        generateNumBetween(1, 40, 2000),
        generateNumBetween(1, 40, 1500),
    ])
}

generateSeveralNums().then(console.log)