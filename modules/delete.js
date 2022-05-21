 export async function Delete (url, id) {
     console.log(id)
     await  axios.delete(url+id)
}