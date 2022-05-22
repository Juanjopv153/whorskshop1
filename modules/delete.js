import { url } from './url.js'

export async function Delete(id) {

    await axios.delete(url + id)
    return alert("¡Ha sido eliminado con éxito!")
}