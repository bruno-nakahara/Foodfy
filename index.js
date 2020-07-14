const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const foodId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `assets/${foodId}.png`
        const foodName = card.getElementsByTagName('h4')[0].textContent
        const foodCreator = card.getElementsByTagName('p')[0].textContent
        const modalName = document.createElement("h4")
        modalName.setAttribute("id", "nodeContent")
        const modalNameText = document.createTextNode(foodName)
        modalName.appendChild(modalNameText)
        document.querySelector('.modal-content').appendChild(modalName)
        const modalCreator = document.createElement("p")
        modalCreator.setAttribute("id", "nodeName")
        const modalCreatorText = document.createTextNode(foodCreator)
        modalCreator.appendChild(modalCreatorText)
        document.querySelector('.modal-name').appendChild(modalCreator)
    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
    document.getElementById("nodeContent").remove()
    document.getElementById("nodeName").remove()
        
})