// IIFE (Immediately Invoked Function Expression) => "Cacher" le code
(function () {
    const numberToGuess2 = Math.random()
})()

// Les fonctions
function hello(name) {
    return `Hello ${name}`
}

console.log(hello('Fiorella'))

// Même chose...
const goodBye = function (name) {
    return `Goodbye ${name}`
}

console.log(goodBye('Fiorella'))

// Arrow function
const bonjour = (name) => `Bonjour ${name}`
console.log(bonjour('Fiorella'))

// Avec ternaire...
const isPair = (n) => (n % 2 === 0 ? 'Pair' : 'Impair')
console.log(isPair(2), isPair(3))

// Parcourir un tableau
const cars = ['Renault', 'Peugeot', 'Porsche']
cars.forEach((car) => console.log(car))

const arrayUpper = (array) => array.map(element => {
    if (element === 'Porsche') {
        return element
    }

    return element.toUpperCase()
})

const arrayUpper2 = (array) => array.map(element =>
    element === 'Porsche' ? element : element.toUpperCase()
)
console.log(arrayUpper(cars), cars)

// Les fonctions sont des objets (PROTOTYPE)
function Student(firstname) {
    console.log(this) // this === new Student('Pierre') car on a fait "new"
    this.firstname = firstname
}

Student.prototype.talk = function () {
    console.log(this) // this === Student('Pierre')
    // attention on perd le this avec les arrow functions
    console.log(`${this.firstname} parle`)
}

let pierre = new Student('Pierre')
console.log(pierre)
pierre.talk()

let oscar = new Student('Oscar')
oscar.talk()

// this === window
console.log(this, this.firstname)

String.prototype.toLeetSpeak = function () {
    return this.replace('o', '0').replace('e', '3').replace('a', '4')
}

console.log('Fiorella'.toLeetSpeak())
console.log('Pierre'.toLeetSpeak())
console.log('Oscar'.toLeetSpeak())

// this
function debugThis() {
    console.log(this)
}

debugThis() // this === window
new debugThis() // this === Object ?

const product = {
    name: 'iPhone',
    price: 599,
    withTaxes: function () {
        return this.price * 1.2 // this === product
    },
    debug: debugThis
}

console.log(product.withTaxes())

product.debug() // this === product

let test = [1, 2, 3, 4].map(n => n * 2)
console.log(test)
const accumulator = (previous, current) => previous + current
console.log(test.reduce(accumulator))

const numberToGuess = Math.random()

const User = (name) => ({
    name, // name: name
    whoami: function () {
        return this.name
    },
    whoami2: () => this.name, // ATTENTION AU THIS...
    whoami3() {
        return this.name
    }
})

console.log(User('Fiorella').whoami())
console.log(User('Oscar').whoami2())
console.log(User('Pierre').whoami3())
