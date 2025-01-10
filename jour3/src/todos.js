export function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP')
            }

            return response.json()
        })
        .then(todos => {
            console.log(todos)
            const list = document.querySelector('#todos')
            list.innerHTML += todos.map(todo =>
                `<li>
                    ${todo.title}
                    ${todo.completed ? '✅' : ''}
                </li>`
            ).join('')
        })
        .catch(error => {
            document.querySelector('#api-errors').textContent = error.message
        })
}

const delay = s => {
    return new Promise((resolve) => {
        setTimeout(resolve, s * 1000)
    })
}

const loadTodos = async () => {
    const loading = document.querySelector('#loading')
    loading.classList.remove('hidden')

    try {
        await delay(2)
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        const todos = await response.json()
        const list = document.querySelector('#todos')
        list.innerHTML += todos.map(todo =>
            `<li>
                ${todo.title}
                ${todo.completed ? '✅✅' : ''}
            </li>`
        ).join('')
    } catch (error) {
        document.querySelector('#api-errors').textContent = 'Erreur HTTP'
    }

    loading.classList.add('hidden')
}

export default loadTodos
