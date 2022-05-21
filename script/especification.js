let url = "https://fresh-prince.herokuapp.com/products"
let localData = 0
let container = document.getElementById('container')
let template = document.getElementById('templateEspecification').content

window.addEventListener('DOMContentLoaded', async()=>{
    if(localStorage.getItem('section')){
        localData = JSON.parse(localStorage.getItem('section'))
    }
    let res = await fetch(url)
    let data = await res.json()
    let dataSection = data.find(({id})=>{
        return id == localData
    })
    getData(dataSection)
})

let getData = (data)=>{
    const {images, name, price} = data
        images.forEach((elem)=>{
            let image = document.createElement('img')
            image.src = elem
            template.querySelector('.imagesSections').appendChild(image)
            
        })
        images.forEach((elem)=>{
            let image = document.createElement('img')
            image.src = elem
            template.querySelector('.imagesDemostration').appendChild(image)
            
        })
        template.querySelector('h1').textContent = name;
        template.querySelector('span').textContent = `$${price}.00`;
        container.appendChild(template)

}