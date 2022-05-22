import {url} from './url.js'

export const Editar = async (object)=>{

    try {
      
        await axios.put(url, JSON.stringify(object))
        alert("Información actualizada")
    } catch (error) {
        alert("Hubo un error", error)
    }

}

