export async function Data (){
    let url = "https://fresh-prince.herokuapp.com/products/"
    let res = await fetch(url)
    let data = await res.json()
    return data
}