class Produto {
    constructor(name, price, desc = 0.5){
        this._name = name
        this._price = price
        this.desc = desc
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

    // 'get' torna possivel acessar a função como um atributo
    get finalPrice(){ 
        return (this._price * (1 - this.desc)).toFixed(2)
    }
}

const p1 = new Produto('Caneta', 10)
console.log(p1.name)
p1.price = 20
p1.price = -30
console.log(p1.price)

const p2 = new Produto('Geladeira', 2500, 0.7)
p2.name = 'Notebook'
console.log(p2.name)
console.log(p2.price)
console.log(p2.finalPrice)