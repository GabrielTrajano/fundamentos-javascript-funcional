function workOrNot(value, chanceError){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceError){
            reject('An error has occurred!')
        } else {
            resolve(value)
        }
    })
}

workOrNot('Testing...', 0.1)
    .then(console.log)
    .catch(err => console.log(`Error: ${err}`))