
const setupProducts = () => {
    loadProducts(5)

    const limitSelect = document.querySelector('#products-limit')
    limitSelect.innerHTML += [...Array(20).keys()].map(i =>
        `<option value="${i + 1}">${i + 1}</option>`
    ).join('')
    limitSelect.addEventListener('change', () => {
        loadProducts(limitSelect.value)
    })
}
const loadProducts = async (limit) => {
    toggleLoader()
    document.querySelector('#products-error').textContent = ''
    const list = document.querySelector('#products')
    list.innerHTML = ''

    try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        const products = await response.json()
        list.innerHTML = products.map(renderProduct).join('')
    } catch (error) {
        document.querySelector('#products-error').textContent = 'API non disponible'
    }

    toggleLoader()
}

const toggleLoader = () => {
    document.querySelector('#products-loading').classList.toggle('hidden')
}

const renderProduct = (product) => {
    return `<div class="bg-white rounded-md">
        <h2 class="text-2xl font-bold">${product.title}</h2>
        <p class="text-gray-600">${truncate(product.description)}</p>
        <div class="flex items-center justify-between">
            <p class="text-gray-600 font-bold text-2xl">${product.price} €</p>
            <p class="text-sm">${product.rating.rate} / 5 sur ${product.rating.count} avis</p>
        </div>
        <img class="h-40 mx-auto" src="${product.image}" alt="${product.title}">
    </div>`
}

const truncate = (string) => {
    if (string.length > 50) {
        return `${string.substring(0, 50)}...`
    }

    return string
}

export {
    setupProducts
}
