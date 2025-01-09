// DOM
const title = document.querySelector('h1')

title.textContent = 'Mon nouveau titre'
title.innerHTML = 'Mon <i>nouveau</i> titre'
// Attention à ne pas mettre n'importe quoi dans le innerHTML (faille xss)
// title.innerHTML = '<script>alert("ok")</script>'

console.log(title)

// Créer un élément dans le DOM
const p = document.createElement('p')
p.textContent = 'Je suis un paragraphe'

const container = document.querySelector('#container')
container.appendChild(p)

p.textContent += ` et nous sommes en ${new Date().getFullYear()}`

p.classList.add('text-blue-500')
p.style.backgroundColor = 'lightgrey'

// Evénements
const button = document.getElementById('my-button')
let count = Number(button.textContent)
button.addEventListener('click', (event) => {
    // currentTarget sera toujours le bouton et target est l'élément cliqué
    // console.log(button, event.currentTarget, event.target)
    if (count >= 20) {
        button.removeEventListener('click', logCount)
        return
    }

    count += 2
    event.currentTarget.textContent = count
})

const logCount = () => console.log(count, Math.random())
button.addEventListener('click', logCount)

// Le DOM est un arbre
button.addEventListener('click', () => {
    const parent = button.parentNode
    const childrens = parent.children
    const firstBro = button.previousElementSibling
    const lastBro = button.nextElementSibling

    console.log(parent, childrens, firstBro, lastBro)

    if (childrens[0] && childrens[0].tagName === 'H1') {
        childrens[0].remove()
    }

    const newP = document.createElement('p')
    newP.textContent = new Date().getFullYear()
    parent.replaceChild(newP, parent.lastChild)
})

// Formulaire
const form = document.getElementById('myForm')
form.addEventListener('submit', (event) => {
    event.preventDefault() // Annule le comportement par défaut du formulaire

    const fields = form.elements // Les inputs du formulaire
    const { name, confirmed } = form.elements // On peut destructurer l'objet

    console.log(name, confirmed)

    const errors = {}

    if (!name.value) {
        errors.name = 'Le nom est requis'
    }

    if (!confirmed.checked) {
        errors.confirmed = 'Vous devez confirmer le formulaire'
    }

    const errorsElement = document.getElementById('errors')
    errorsElement.textContent = ''

    if (Object.keys(errors).length > 0) {
        for (let error of Object.values(errors)) {
            const p = document.createElement('p')
            p.textContent = error
            p.classList.add('text-red-500')
            errorsElement.appendChild(p)
        }

        return
    }

    let success = `Bonjour ${name.value}, tu as confirmé le formulaire.`
    const successElement = document.getElementById('success')
    successElement.textContent = success

    setTimeout(() => {
        successElement.textContent = ''
    }, 5000)
})
