function generateNumBtw(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve =>{
        const fator = max - min + 1
        const randomNum = parseInt(Math.random() * fator) + min
        resolve(randomNum)
    })
}

generateNumBtw(1, 40)
    .then(num => `O número gerado foi ${num}`)
    .then(console.log)