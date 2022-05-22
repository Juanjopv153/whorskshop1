import { url } from './url.js'

export async function Delete(id) {

    await axios.delete(url + id)
    return alert("The product has been deleted succesfully!")
}