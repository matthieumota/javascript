// Variables
let age = 4
const firstname = 'Fiorella'

if (age == 4) {
    let age = 5
    console.log('Tu as ' + age + ' ans')
}

{ // Variable bloquée dans la portée
    let age = 10
}

console.log(`Ma fille ${firstname} a ${age} ans.`)

// Structures de contrôles
if (age < 18) {
    console.log('Tu es mineur')
} else if (age < 25 && age > 20) {
    console.log('Vous avez une promo')
} else {
    console.log('Vous n\'avez plus de promo')
}

for (let i = 0; i < 10; i++) {
    let student = 'Oscar'
    console.log('La valeur du compteur :', i)
}

// console.log(student) // student n'existe pas ici

// Les tableaux
let fruits = ['Pomme', 'Banane', 'Cerise']
console.log(fruits[0])
fruits.push('Orange', 'Poire')
fruits.splice(1, 0, 'Pasteque') // Je démarre sur Banane
console.log(fruits)

for (const fruit of fruits) {
    console.log(fruit)
}

// Une autre façon faire (+ complexe mais efficace)
fruits = fruits.filter(function (fruit) {
    return fruit.length === 5 // Je garde les fruits qui ont 5 caractères
}).map(function (fruit, index) {
    return `${index} : ${fruit}` // Transforme 'Pomme' en '0 : Pomme'
})

fruits.forEach(function (fruit) {
    console.log(fruit) // Logique d'affichage
})

console.log(fruits) // Le tableau est modifié

// Les objets
const person = { name: 'Fiorella', age: 4 }

person.age = 5
console.log(`${person.name} a ${person['age']} ans.`)

const contacts = [
    person,
    { name: 'Pierre', age: 25 }
]

for (let contact of contacts) {
    console.log(`${contact.name} a ${contact.age} ans.`)
}

// Les objets sont des objets comme les tableaux sont des objets
const properties = Object.keys(person)
console.log(properties, Object.values(person))

// Exotique... + côté backend
console.log(JSON.stringify(contacts))

const parsedFile = JSON.parse(`{
    "title": "Hello",
    "price": 10.85
}`)

console.log(parsedFile, parsedFile.title)
