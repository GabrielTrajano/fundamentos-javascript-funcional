// Arrow Function
const happyChristmas = () => console.log("Happy Christmas!!!")
happyChristmas()

const greetings = (name) => `Hey, ${name}! What's up?`
console.log(greetings("Julius"))

const sum = (...numbers) => {
    let total = 0
    for(let n of numbers){
        total += n
    }
    return total
} 

console.log(sum(2, 3, 6, 5, 4))


// this
Array.prototype.lastElemt = function(){
    console.log(this[this.length-1])
}

const numbers = [2, 3, 6, 4]
numbers.lastElemt()