const numbers = [1, 2, 3, 4, 5, 6]
const numbers2 = numbers.map(elem => elem *2)

console.log(`Array Numbers: ${numbers}`)
console.log(`Array Numbers2: ${numbers2}`)

const students = [
    { name: 'Louis', score: 7.4 },
    { name: 'Seneca', score: 9.2 },
    { name: 'Cicero', score: 8.5 },
    { name: 'Augustus', score: 6.9 }
]

const getScore = elem => elem.score

const result = students
                    .map(getScore)
                    .map(Math.ceil)

console.log(students, result)