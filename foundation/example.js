/*
Create a simple range function.
range(5) -> [1, 2, 3, 4, 5]
range(6, 11) -> [6, 7, 8, 9, 10, 11]
range(10, 19, 2) -> [10, 12, 14, 16, 18]
range(6, 2) -> [6, 5, 4, 3, 2]
range(8, -3, 4) -> [8, 4, 0]
*/

function range(param1, param2, s = 1){
    const numbers = []

    /* 
    * Se o param2 não for definido o num1(inicio) do range vai ser 1
    * e o param1 vai ser o num2(final) do range.
    * Mas caso exista o param2, o param1 vai ser o num1(inicio) do range e
    * o param2 o num2(final) do range.
    */
    const num1 = param2 === undefined ? 1 : param1
    const num2 = param2 === undefined ? param1 : param2

    /* Quantidade de 'pulos' que o range dará de acordo com
     a diferença de grandeza numérica dos primeiros dois parâmetros. */
    const step = num1 <= num2 ? Math.abs(s) : -Math.abs(s)

    for(i = num1; (num1 <= num2) ? (i <= num2) : (i >= num2); i += step){
        numbers.push(i)
    }
    return numbers
}

console.log(range(5)) // -> [1, 2, 3, 4, 5]
console.log(range(6, 11)) // -> [6, 7, 8, 9, 10, 11]
console.log(range(10, 19, 2)) // -> [10, 12, 14, 16, 18]
console.log(range(6, 2)) // -> [6, 5, 4, 3, 2]
console.log(range(8, -3, 4)) // -> [8, 4, 0]
console.log(range(8, -3, 4, 6)) // -> [8, 4, 0]
