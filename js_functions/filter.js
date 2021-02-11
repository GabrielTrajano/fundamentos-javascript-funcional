const cart = [
    { name: 'Pen', amount: 10, price: 8.65},
    { name: 'Printer', amount: 0, price: 800.75},
    { name: 'Book', amount: 5, price: 18.65},
    { name: 'Pencil', amount: 12, price: 2.50},
    { name: 'Scissors', amount: 2, price: 16.30}
]

const getName = item => item.name
const amountGreaterThanZero = item => item.amount > 0

const nameValidItems = cart
                        .filter(amountGreaterThanZero)
                        .map(getName)

console.log(nameValidItems)

// My Filter
Array.prototype.myFilter = function(fn){
    const filtered = []

    for(let i = 0; i < this.length; i++){
        if( fn(this[i], i, this) ){
            filtered.push(this[i])
        }
    }
    return filtered
}

const nameValidItems2 = cart
                        .myFilter(amountGreaterThanZero)
                        .map(getName)

console.log(nameValidItems2)