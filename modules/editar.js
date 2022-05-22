export const Editar = async (url,object)=>{

    try {
      
        await axios.put(url, object)
        alert("Información actualizada")
    } catch (error) {
        alert("Hubo un error", error)
    }

}

