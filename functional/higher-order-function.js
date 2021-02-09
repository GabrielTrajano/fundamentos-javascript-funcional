/*
* Functions that operate on other functions,
* either by taking them as arguments or by
* returning them, are called higher-order functions.
*/

// Curring
function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    }
}

/* 
* Evita ter que passar o tax repetidas vezes, 
* bastando  passar o price quando for utilizar o rjFinalPrice.
*/ 
const rjFinalPrice = finalPrice(0.0875)

// Passando somente o price já que o tax ja foi definido no rjFinalPrice
console.log(rjFinalPrice(26.0))
console.log(rjFinalPrice(21.7))
console.log(rjFinalPrice(19.1))
console.log(rjFinalPrice(11.8))