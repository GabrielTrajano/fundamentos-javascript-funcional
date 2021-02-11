const nums = [1, 2, 3, 4, 5, 6]
const doubleNum = (elem) => elem * 2
console.log(nums.map(doubleNum))

const names = ['Julius', 'William', 'Romanov', 'Tesla']
const firstLetter = name => name[0]
const letters = names.map(firstLetter)
console.log(names, letters)

const cart = [
    { name: 'Pen', amount: 10, price: 8.65},
    { name: 'Printer', amount: 2, price: 800.75},
    { name: 'Book', amount: 5, price: 18.65},
    { name: 'Pencil', amount: 12, price: 2.50},
    { name: 'Scissors', amount: 2, price: 16.30}
]

const getName = item => item.name
console.log(cart.map(getName))

const getTotal = item => item.amount * item.price
const totals = cart.map(getTotal)
console.log(totals)

//  My Map
Array.prototype.myMap = function(fn){
    const mapped = []
    for(let i = 0; i < this.length; i++){
        mapped.push(fn(this[i], i, this))
    }
    return mapped
}

const totals2 = cart.myMap(getTotal)
console.log(totals2)