// Exercice 1
const changeTextButton = document.getElementById('change-text')
const originalText = document.querySelector('#original-text')

changeTextButton.addEventListener('click', () => {
    originalText.textContent = `Text ${Math.random()}`
})

// Exercice 2
const listNormal = document.querySelector('#normal-list')

for (let child of listNormal.children) {
    console.log(child.textContent)
}

// Ajouter un élément à la liste
const newLi = document.createElement('li')
newLi.classList.add('py-4')
newLi.textContent = `Elément ${listNormal.children.length + 1}`

// Ajoute le li dans 2 secondes
setTimeout(() => {
    listNormal.appendChild(newLi)
}, 2000)

// Modifier un élément de la liste
//listNormal.children[0].textContent = `${listNormal.children[0].textContent} modifié`

// Supprimer un élément de la liste
//listNormal.children[1].remove()














// Bonus
/*const list = document.querySelector('#items-list')

const createItem = () => {
    const newLi = document.createElement('li')
    newLi.classList.add('py-4')
    newLi.innerHTML = `
        <input type="checkbox">
        <span>Elément ${list.children.length + 1}</span>
    `
    newLi.addEventListener('click', () => {
        editItem(newLi)
    })
    const newDeleteButton = document.createElement('button')
    newDeleteButton.textContent = 'X'
    newDeleteButton.addEventListener('click', () => {
        newLi.remove()
        refreshItemsLength()
    })
    const checkboxToggle = newLi.querySelector('input[type="checkbox"]')
    checkboxToggle.addEventListener('click', (event) => {
        event.stopPropagation()
        const completed = event.currentTarget.checked

        if (completed) {
            newLi.classList.add('line-through')
        } else {
            newLi.classList.remove('line-through')
        }
    })
    newLi.appendChild(document.createTextNode('\n'))
    newLi.appendChild(newDeleteButton)
    list.appendChild(newLi)
}

const editItem = (item) => {
    item.querySelector('span').textContent = `${item.querySelector('span').textContent} modifié`
}

const refreshItemsLength = () => {
    document.querySelector('#items-length').textContent = list.children.length
    document.querySelector('#completed-length').textContent = Array.from(list.children).filter(child => child.querySelector('input[type="checkbox"]').checked).length
}

const addItemAction = document.querySelector('#add-item-action')
addItemAction.addEventListener('click', () => {
    createItem()
    refreshItemsLength()
})

for (let child of list.children) {
    child.addEventListener('click', () => {
        editItem(child)
    })

    const deleteButton = child.querySelector('button')
    deleteButton.addEventListener('click', () => {
        child.remove()
        refreshItemsLength()
    })

    const checkboxToggle = child.querySelector('input[type="checkbox"]')
    checkboxToggle.addEventListener('click', (event) => {
        event.stopPropagation()
        const completed = event.currentTarget.checked

        if (completed) {
            child.classList.add('line-through')
        } else {
            child.classList.remove('line-through')
        }

        refreshItemsLength()
    })

    if (checkboxToggle.checked) {
        child.classList.add('line-through')
    }
}

refreshItemsLength()*/
