const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, elem) => total + elem
const total = numbers.reduce(sum)
console.log(total)

const avg = (acc, elem, i, array) => {
    if(i !== array.length - 1){
        return acc + elem
    } else {
        return (acc + elem) / array.length
    }
}

const result = numbers.reduce(avg)
console.log(result)