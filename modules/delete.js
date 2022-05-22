 export async function Delete (url, id) {
     
     await  axios.delete(url+id)
}