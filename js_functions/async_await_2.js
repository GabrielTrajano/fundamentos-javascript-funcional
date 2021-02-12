function generateNumBetween(min, max, prohibitedNumnbers){
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            const fator = max - min + 1
            const randomNum = parseInt(Math.random() * fator) + min
            if(prohibitedNumnbers.includes(randomNum)){
                reject('Número repetido!')
            } else {
                resolve(randomNum)
            }
        })
    })
}

async function generateMegaSena(amountNumbers, attempts = 1){
    try{
        const numbers = []
        for(let _ of Array(amountNumbers).fill()){
            numbers.push(await generateNumBetween(1, 60, numbers))
        }
        return numbers
    } catch(err){
        if(attempts > 10){
            throw "Não deu certo!"
        }
        else {
            return generateMegaSena(amountNumbers, attempts + 1)
        }
    }
}

generateMegaSena(15)
    .then(console.log)
    .catch(console.log)

// generateNumBetween(1, 5, [1,2,4])
//     .then(console.log)
//     .catch(console.log)