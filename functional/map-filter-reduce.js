const students = [
    { name: 'Vergil', score: 6.8 },
    { name: 'Seneca', score: 8.7 },
    { name: 'Cicero', score: 9.8 },
    { name: 'Horace', score: 7.9 },
]

const greatStudent = student => student.score >= 9
const getScore = student => student.score
const avg = (acc, elem, i, array) => {
    if(i !== array.length - 1){
        return acc + elem
    } else {
        return (acc + elem) / array.length
    }
}

console.log(students
                 .filter(greatStudent)
                 .map(getScore)
                 .reduce(avg)
)