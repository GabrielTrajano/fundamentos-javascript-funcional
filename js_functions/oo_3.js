class Product {
    constructor(name, price, desc = 0.1){
        this._name = name
        this._price = price
        this._desc = desc
    }

    get name(){
        return `Produto: ${this._name}`
    }
    set name(newName){
        this._name = newName.toUpperCase()
    }

    get price(){
        return this._price
    }
    set price(newPrice){
        if (newPrice >= 0 ){
            this._price = newPrice
        }
    }

    get finalPrice(){ 
        return (this._price * (1 - this.desc)).toFixed(2)
    }
}

Product.prototype.log = function(){
    console.log(`Nome: ${this._name} -> Preço: R$${this._price}`)
}

Object.defineProperty(Product.prototype, 'desc', {
    get: function(){
        return this._desc
    },
    set: function(newDesc){
        if(newDesc >= 0 && newDesc <= 1){
            this._desc = newDesc
        }
    }
})

Object.defineProperty(Product.prototype, 'descString', {
    get: function(){
        return `${this._desc * 100}% de desconto`
    }

})

p3 = new Product('Fogão', 1600)
p3.log()
console.log(p3.finalPrice)

p3.desc = 0.40
console.log(p3.desc)
console.log(p3.finalPrice)
console.log(p3.descString)
