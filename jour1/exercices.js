// Créez un script qui calcule la moyenne des notes d'une classe à l'aide de fonctions.
const notes = [15, 18, 12, 14, 16]

const average = (notes) => {
    let total = 0

    for (let note of notes) {
        total += note
    }

    return total / notes.length
}

const avg = (notes) => notes.reduce((a, c) => a + c) / notes.length

console.log(average(notes), avg(notes))

// Créez une liste d'articles avec des prix, appliquez une remise à l'aide de map, et filtrez les articles sous un certain prix.
const articles = [
    { nom: 'Chaise', prix: 50 },
    { nom: 'Table', prix: 150 },
    { nom: 'Lampe', prix: 30 }
]

const withDiscount = (discount) => articles.map(article => {
    if (discount >= 100) {
        discount = 90
    }

    const articleClone = { ...article } // Le clone permet d'éviter de modifier les objets partout...
    articleClone.prix *= (100 - discount) / 100

    return articleClone
})

const filterPrice = (price, articles) => articles.filter(article => article.prix <= price)

const discounted = withDiscount(10) // Tableau des articles avec 10% de remise

withDiscount(10) // Grâce au clone, on a pas de soucis...
withDiscount(10)
withDiscount(10)

console.log(discounted)
console.log(filterPrice(50, discounted))

// Créez une fonction qui exécute une fonction donnée plusieurs fois
const repeat = (func, times) => {
    for (let i = 0; i < times; i++) {
        func()
    }
}

repeat(() => console.log('J\'aime le JavaScript'), 5)

// Créez une fonction somme qui accepte un nombre variable d'arguments et renvoie leur somme. Utilise arguments (ou autre) pour traiter un nombre inconnu d'arguments.
const sum = (...numbers) => numbers.reduce((a, c) => a + c)
console.log(sum(1, 2, 3, 4, 5))

// Créez une fonction fléchée multiplier qui prend deux nombres et renvoie leur produit.
const multiply = (a, b) => a * b

// Créez une fonction monMap qui imite le comportement de la méthode map sur un tableau. Cette fonction doit prendre un tableau et une fonction de rappel, et retourner un nouveau tableau où chaque élément est transformé par la fonction de rappel.
Array.prototype.monMap = function (func) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        result.push(func(this[i], i, this))
    }

    return result
}

console.log([1, 2, 3, 4, 5].monMap((n, i, a) => {
    console.log(n, i, a)

    return n * 2
}))

// Créez une fonction récursive factorielle qui calcule le produit des entiers positifs jusqu'à un certain nombre (par exemple, factorielle(5) renverra 5 * 4 * 3 * 2 * 1 = 120).
const factorielle = (n) => n > 0 ? n * factorielle(n - 1) : 1

console.log(factorielle(5)) // 120

/*
Imaginons un système pour gérer un compte bancaire. Le compte bancaire est représenté par un objet qui possède des propriétés et des méthodes pour effectuer des opérations financières comme les dépôts et les retraits. Nous utiliserons le mot-clé this pour accéder aux propriétés de l'objet à l'intérieur de ses méthodes.

Crée un objet compteBancaire avec les caractéristiques suivantes :

    propriétaire : le nom du titulaire du compte (par exemple "John Doe").
    solde : le solde actuel du compte, initialisé à 0.
    deposer(montant) : Cette méthode permet d'ajouter un montant au solde du compte. Si le montant est positif, il est ajouté au solde. Si le montant est négatif, un message d'erreur doit être affiché.
    retirer(montant) : Cette méthode permet de retirer un montant du compte, à condition que le solde soit suffisant. Si le montant est positif et inférieur ou égal au solde, il est retiré du compte. Si le montant est supérieur au solde, un message d'erreur doit être affiché. Si le montant est négatif, un message d'erreur doit être affiché.
*/

const bankAccount = {
    owner: 'Fiorella Mota',
    balance: 0,
    put(amount) {
        if (amount > 0) {
            this.balance += amount
        } else {
            console.error('Le montant doit être positif')
        }
    },
    get(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
        } else {
            console.error('Le montant doit être positif et inférieur ou égal au solde')
        }
    }
}

bankAccount.put(100)
bankAccount.get(50)
bankAccount.put(300)
bankAccount.get(200)

console.log(bankAccount)
