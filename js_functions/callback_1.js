function exec(fn, a, b){
    return fn(a, b)
}

const sum = (x, y) => console.log(x + y)
const subtract = (w, z) => console.log(w - z)

exec(sum, 56, 84)
exec(subtract, 145, 65)


// const contSeconds = () => console.log('+ 1 second...')
// setInterval(contSeconds, 1000)


setInterval(function() {
    console.log('+ 2 seconds...')
} , 2000)