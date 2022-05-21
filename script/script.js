import { Delete } from "../modules/delete.js"

const url = "https://fresh-prince.herokuapp.com/products/"
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
        template.querySelector(".gestionar").id = id
        let node = template.cloneNode(true)
        frag.appendChild(node)

        
    });
    container.appendChild(frag)
}

document.addEventListener("click", ({target})=>{
    
    if(target.classList.contains("gestionar") ){

        Delete(url,target.id)
    }
})



