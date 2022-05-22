import { Data } from "../modules/url.js"

const logo = document.getElementById("logo")
let localData = 0
let container = document.getElementById('container')
let template = document.getElementById('templateEspecification').content;
const wallet = document.getElementById("wallet")
const shop = document.getElementById("shop")


window.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('section')) {
        localData = JSON.parse(localStorage.getItem('section'))
    }
    let data = await Data()
    let dataSection = data.find(({ id }) => {
        return id == localData
    })
    getData(dataSection)
})

let getData = (data) => {
    container.innerHTML = ""
    template.innerHTML = ""
    const { imagenP, img1, img2, name, price } = data

    const image = document.createElement('img')
    const image1 = document.createElement('img')
    const image2 = document.createElement('img')
    image.setAttribute('src', imagenP)
    image1.setAttribute('src', img1)
    image2.setAttribute('src', img2)

    image.src = imagenP
    image1.src = img1
    image2.src = img2

    template.querySelector('.imagesSections').appendChild(image)
    template.querySelector('.imagesSections').appendChild(image1)
    template.querySelector('.imagesSections').appendChild(image2)

    const images = document.createElement('img')
    const image1s = document.createElement('img')
    const image2s = document.createElement('img')
    images.setAttribute('src', imagenP)
    image1s.setAttribute('src', img1)
    image2s.setAttribute('src', img2)

    template.querySelector('.imagesDemostration').appendChild(images)
    template.querySelector('.imagesDemostration').appendChild(image1s)
    template.querySelector('.imagesDemostration').appendChild(image2s)

    template.querySelector('h1').textContent = name;
    template.querySelector('span').textContent = `$${price}.00`;
    container.appendChild(template)
    document.title = `FP: ${name}`
}

logo.addEventListener("click", () => {
    window.location.href = '../index.html'
})

wallet.addEventListener("click", () => {
    window.location.href = './crud.html'
})

shop.addEventListener("click", () => {
    window.location = '../index.html'
})
