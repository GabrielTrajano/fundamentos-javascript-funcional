// Function declaration

function sayHello(){
    console.log('Hello!!!')
}

let x = sayHello()

// retorna undefined porque não está retornando nada.
console.log(x)

function sayHelloTo(name){
    console.log(`Hello ${name}`)
}

sayHelloTo('Gabriel')
sayHelloTo()

function returnHi(){
    return 'Hi!'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi, ${name}!`
}

console.log(returnHiTo('Matheus'))