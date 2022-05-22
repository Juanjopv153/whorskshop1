import { Crear } from "../modules/crear.js"
import { Editar } from "../modules/editar.js"
import { Data } from "../modules/url.js"

let logo = document.getElementById("logo")
let form = document.getElementById("form")
let btnBuscar = document.getElementById("buscar")
let btnEditar = document.getElementById("editar")
let btnCrear = document.getElementById("crear")
const url = "https://fresh-prince.herokuapp.com/products/"
const shop = document.getElementById("shop")


logo.addEventListener("click", () => {
    window.location.href = "../index.html"
})
//funcionalidad de buscar
btnBuscar.addEventListener("click", async (e) => {
    e.preventDefault()
    let nombre = document.getElementById("name").value
    if (nombre !== "") {
        const productos = await Data()
        const buscarName = productos.find(({ name }) => {
            return name.toLowerCase() == nombre.toLowerCase()
        })
        console.log(buscarName);
        // if (buscarName.length > 0) {
        //     // let { id, price, imagenP, img1, img2 } = buscarName
        //     // document.getElementById("price").value = price
        //     // document.getElementById("img").value = imagenP
        //     // document.getElementById("id").value = id
        //     // document.getElementById("img1").value = img1
        //     // document.getElementById("img2").value = img2
        //     console.log("hermoso");
        // }
        // else {
        //     alert("Ha ocurrido un error")
        // }
    }
    else {
        alert("Pon algún valor")
    }
})
//funcionalidad de editar
btnEditar.addEventListener("click", async (e) => {
    e.preventDefault()

    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let img = document.getElementById("img").value
    let img1 = document.getElementById("img1").value
    let img2 = document.getElementById("img2").value
    let price = document.getElementById("price").value

    let elementChanged = {
        name: name,
        imagenP: img,
        price: price,
        img1: img1,
        img2: img2
    }


    await Editar(url + id, elementChanged)
    form.reset()
})

//funcionalidad de agregar 

form.addEventListener("submit", async (e) => {

    e.preventDefault()
    let name = document.getElementById("name").value
    let img = document.getElementById("img").value
    let img1 = document.getElementById("img1").value
    let img2 = document.getElementById("img2").value
    let price = document.getElementById("price").value

    if (name !== "" && img !== "" && img1 !== "" && img2 !== "" && price !== "") {
        let newElement = {
            name: name,
            imagenP: img,
            price: price,
            img1: img1,
            img2: img2
        }
        await Crear(newElement)
        form.reset()
    }
    else{
        alert("Rellena todos los campos")
    }

})

shop.addEventListener("click", () => {
    window.location = '../index.html'
})





