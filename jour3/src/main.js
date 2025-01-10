import './style.css'
import counter from './counter'

// counter(document.querySelector('#counter'))
// counter(document.querySelector('#counter-2'))

const counters = document.querySelectorAll('[data-counter]')
counters.forEach(c => counter(c))
