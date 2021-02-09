const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = elem => elem > 0
const greaterThanTen = elem => elem > 10
const even = elem => elem % 2 === 0

console.log(numbers.filter(elem => elem > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))


const students = [
    { name: 'Vergil', score: 6.8 },
    { name: 'Seneca', score: 8.7 },
    { name: 'Cicero', score: 9.8 },
    { name: 'Horace', score: 7.9 },
]

const greatStudent = student => student.score >= 9

console.log(students.filter(greatStudent))
console.log(students)