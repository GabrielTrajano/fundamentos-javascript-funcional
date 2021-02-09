// Anonymous function
// IIFE - Immediately Invoked Function Expression
(function (a, b, c){
    let x = 980
    console.log(x)
    console.log(`Result: ${a + b * c}`)
})(2, 5, 6);
// OBS: É necessário ponto e vírgula (;) no final caso vá usar outra Anonymous function IIFE

(function() {
    let x = 400
    console.log(x)
})();

( () => console.log('Arrow IIFE'))()