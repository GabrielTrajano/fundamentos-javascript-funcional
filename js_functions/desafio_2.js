const cart = [
    { name: 'Pen', amount: 10, price: 8.65, fragile: true},
    { name: 'Printer', amount: 2, price: 800.75, fragile: true},
    { name: 'Book', amount: 5, price: 18.65, fragile: false},
    { name: 'Pencil', amount: 12, price: 2.50, fragile: true},
    { name: 'Scissors', amount: 2, price: 16.30, fragile: false}
]

// filter, map, reduce

// 1. fragile: true
// 2. amount * price -> total
// 3. total average

const average = cart
    .filter(item => item.fragile)
    .map(item => item.amount * item.price)
    .reduce((acc, elem) => {
        const newAmount = acc.amount + 1 
        const newTotal = acc.total + elem
        console.log(acc, elem)
        return {
            amount: newAmount,
            total: newTotal,
            average: newTotal / newAmount
        }
    }, {amount: 0, total: 0, average: 0})