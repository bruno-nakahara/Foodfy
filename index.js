const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const foodId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("ifrme").src = `assets/${foodId}.png`
    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("ifrme").src = ""
})