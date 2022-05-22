import { Delete } from "../modules/delete.js"
import { Data } from "../modules/url.js"

const template = document.getElementById('cardsTemplate').content
const container = document.getElementById('CardsContainer')
const frag = document.createDocumentFragment()
const wallet = document.getElementById("wallet")


window.addEventListener('DOMContentLoaded', async () => {
    let data = await Data()
    getData(data)
})

let getData = (data) => {
    container.innerHTML = ""
    template.innerHTML = ""
    data.forEach(({ price, name, imagenP, id }) => {
        template.querySelector('img').setAttribute('src', imagenP)
        template.querySelector('h2').textContent = name
        template.querySelector('span').textContent = `Price: $${price}.00`
        template.querySelector(".gestionar").id = id
        template.querySelector(".importantButton").id = id
        let node = template.cloneNode(true)
        frag.appendChild(node)


    });
    container.appendChild(frag)
}

document.addEventListener("click", async ({ target }) => {

    if (target.classList.contains("gestionar")) {
        Delete(target.id)
        let data = await Data()
        getData(data)
    }

    if (target.classList.contains('importantButton')) {
        localStorage.setItem('section', target.id)
        window.location = '../pages/especification.html'
    }
})

wallet.addEventListener("click", () => {
    window.location.href = './pages/crud.html'
})


