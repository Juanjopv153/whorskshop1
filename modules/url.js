export const url = "https://fresh-prince.herokuapp.com/products/"
export async function Data() {
    let res = await fetch(url)
    let data = await res.json()
    return data
}