import { url } from './url.js'

export const Crear = async (object) => {

    await axios.post(url, object)
    return alert("This product has been created!");

}