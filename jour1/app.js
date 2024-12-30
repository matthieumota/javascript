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

// Exercices
let course = 'JavaScript'
console.log(`On fait du ${course}`)

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let number of numbers) {
    const rest = number % 2
    if (rest === 0) {
        console.log(number)
    }
}

const developers = ['Pierre', 'Oscar', 'Matthieu']

for (let developer of developers) {
    console.log(developer)
}

// Créez un tableau d'objets représentant des étudiants avec les propriétés nom et note.
const students = [
    { name: 'Pierre', note: 10 },
    { name: 'Oscar', note: 7 },
    { name: 'Matthieu', note: 9 }
]

// Affichez chaque étudiant et sa note avec une boucle forEach.
students.forEach(function (s) {
    console.log(`${s.name} a la note ${s.note}`)
})

// Ajoutez un nouvel étudiant au tableau et affichez le tableau mis à jour.
students.push({ name: 'Fiorella', note: 8 })

// Calculez et affichez la moyenne des notes.
let total = 0

for (let student of students) {
    total += student.note
}

console.log(`La moyenne est de ${total / students.length}`)
