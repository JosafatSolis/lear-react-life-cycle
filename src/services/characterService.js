import axios from "axios";

// No se exporta por defecto porque van a ser varios servicios
export const getCharacters = () => {
    // Regresa una promesa:
    return axios.get("https://rickandmortyapi.com/api/character")
}

export const getCharacterById = (id) => {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
}