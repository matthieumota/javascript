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
