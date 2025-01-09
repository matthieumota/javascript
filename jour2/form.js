// Créez un formulaire avec les champs "Nom", "Email" et "Message". Récupérez les données et affichez-les dans la console après validation.
const form = document.getElementById('myForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const { name, email, message } = form.elements

    // Valide dynamiquement chaque champ à la saisie. On affichera un CSS correct s'il y a des erreurs (couleur du texte, bordures).
    for (let input of form.elements) {
        input.classList.remove('border-red-500')
        const fieldError = input.parentNode.querySelector('.field-error')
        if (fieldError) {
            input.parentNode.removeChild(fieldError)
        }
    }

    const errors = {}

    if (!name.value) {
        errors.name = 'Le nom est requis'
    }

    if (!email.value) {
        errors.email = 'L\'email est requis'
    } else if (!email.value.includes('@')) {
        errors.email = 'L\'email doit contenir un @'
    }

    if (!message.value) {
        errors.message = 'Le message est requis'
    }

    if (Object.keys(errors).length > 0) {
        for (let input of form.elements) {
            if (errors[input.name]) {
                input.classList.add('border-red-500')

                const p = document.createElement('p')
                p.textContent = errors[input.name]
                p.classList.add('text-red-500', 'field-error')
                input.parentNode.appendChild(p)
            }
        }
    } else {
        alert(`${name.value} ${email.value} ${message.value}`)
        form.reset()
    }
})

// Implémentez des contrôles avancés sur un champ de mot de passe (longueur minimale, inclusion de chiffres et de caractères spéciaux).
const passwordField = document.getElementById('password')
const errorElement = document.getElementById('error')

passwordField.addEventListener('input', () => {
    const password = passwordField.value
    errorElement.textContent = ''

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (!numbers.some(n => password.includes(n))) {
        errorElement.textContent = 'Le mot de passe doit avoir au moins 1 chiffre'
    }

    const specials = '!@#$%^&*()_+-=[]{};:,.<>/?'
    if (!specials.split('').some(s => password.includes(s))) {
        errorElement.textContent = 'Le mot de passe doit avoir au moins 1 caractère spécial'
    }

    if (password.length < 8) {
        errorElement.textContent = `Le mot de passe doit avoir au moins 8 caractères (encore ${8 - password.length})`
    }
})
