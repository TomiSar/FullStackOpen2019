import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

//eli enää ei palautetakaan suoraan axiosin palauttamaa promisea, 
//vaan otetaan promise ensin muuttujaan request ja kutsutaan sille metodia then

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, update }