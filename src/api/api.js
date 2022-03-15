import axios from 'axios'

const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
const _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';

const instance = axios.create({
    baseURL: _apiBase
})

export const marvelServiceAPI = {

    async _request (ref) {
        try {
            const response = await instance.get(ref)

            if (response.statusText !== 'OK') {
                throw new Error(`Could not fetch, status: ${response.status}`)
            }

            return response.data.data

        } catch (e) {
            throw e
        }
    },
    
    async getCharacter (id = 0) {
        return this._request(`characters/${id}?${_apiKey}`)
    },

    async findCharacters (data) {
        return this._request(`characters?nameStartsWith=${data}&limit=5&${_apiKey}`)
    },

    async getAllCharacter (offset = 0) {
        return this._request(`characters?limit=9&offset=${offset}&${_apiKey}`)
    },

    async getComics (id = 0) {
        return this._request(`comics/${id}?${_apiKey}`)
    },

    async getAllComics (offset = 0) {
        return this._request(`comics?limit=8&offset=${offset}&${_apiKey}`)
    },

}