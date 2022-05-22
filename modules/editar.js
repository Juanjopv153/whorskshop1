import { url } from './url.js'

export const Editar = async (id, object) => {

    try {
        await axios.put(url+id, object)
        alert("The information has recived a update")
    } catch (error) {
        alert("Uups, error:", error)
    }

}

