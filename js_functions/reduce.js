const cart = [
    { name: 'Pen', amount: 10, price: 8.65},
    { name: 'Printer', amount: 1, price: 600.75},
    { name: 'Book', amount: 5, price: 18.65},
    { name: 'Pencil', amount: 12, price: 2.50},
    { name: 'Scissors', amount: 2, price: 16.30}
]
 const getTotal = item => item.amount * item.price
 const sum = (acc, elem) => {
    console.log(acc)
    return acc + elem
 }
const total = cart
        .map(getTotal)
        .reduce(sum, 234)

console.log(`Total result: ${total}`)


Array.prototype.myReduce = function(fn, initial){
    let acc = initial
    for(let i=0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const total2 = cart
    .map(getTotal)
    .myReduce(sum, 234)

console.log(`Total result with my reduce:  ${total2}`)
