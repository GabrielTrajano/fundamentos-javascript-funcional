function waitFor(time = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, time)
    })
}

// waitFor(1000)
//     .then(waitFor)
//     .then(() => console.log('Executando promise 1...'))
//     .then(waitFor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(waitFor)
//     .then(() => console.log('Executando promise 3...'))


async function executar() {
    await waitFor(1000)
    console.log('Async/Await 1...')

    await waitFor(1500)
    console.log('Async/Await 2...')

    await waitFor(1500)
    console.log('Async/Await 3...')

    await waitFor(1000)
    return 'Este é o retorno do Async/Await via .then()'
}

executar()
    .then(console.log)