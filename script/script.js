
const url = "http://localhost:4000/products"
const template = document.getElementById('cardsTemplate').content
const container = document.getElementById('CardsContainer')
const frag = document.createDocumentFragment()

window.addEventListener('DOMContentLoaded', async()=>{
    let res = await fetch(url)
    const data = await res.json()
    getData(data)
})

let getData = (data)=>{
    data.forEach(({price, name, images, id}) => {
        template.querySelector('img').setAttribute('src', images[0])
        template.querySelector('h2').textContent = name
        template.querySelector('span').textContent = `Price: $${price}.00`
        template.querySelector('#boton').addEventListener('click', ()=> {console.log("a")})
        let node = template.cloneNode(true)
        frag.appendChild(node)
    });
    container.appendChild(frag)
}