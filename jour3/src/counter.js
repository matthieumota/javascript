export default function counter(element) {
    let count = Number(element.textContent) || 0

    const setCount = (value) => {
        count += value
        element.textContent = count
    }

    element.addEventListener('click', () => setCount(1))

    setCount(0)
}
