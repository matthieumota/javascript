import './style.css'
import counter from './counter'
import loadTodos, { fetchTodos } from './todos'
import { setupProducts } from './products'

// counter(document.querySelector('#counter'))
// counter(document.querySelector('#counter-2'))

const counters = document.querySelectorAll('[data-counter]')
counters.forEach(c => counter(c))

// Promesse ajax avec le .then...
// fetchTodos()

// Promesse ajax avec le async/await
loadTodos() // Le load est asynchrone

setupProducts()

console.log('après')

const mediaQuery = window.matchMedia('(max-width: 768px)')

function handleTabletChange(e) {
    if (e.matches) {
        // L'écran est plus petit que 768px
        console.log('Écran mobile ou tablette')
    } else {
        // L'écran est plus grand que 768px
        console.log('Écran de bureau')
    }
}

mediaQuery.addEventListener('change', handleTabletChange)
handleTabletChange(mediaQuery)

// Plus performant que...
window.addEventListener('resize', () => {
    console.log('resize')
})
