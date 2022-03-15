import { marvelServiceAPI } from "../api/api";

let UPDATE_CHARACTER = 'randomchar-reducer/UPDATE_CHARACTER'
let CHANGE_LOADING = 'randomchar-reducer/CHANGE_LOADING'
let SET_ERROR = 'randomchar-reducer/SET_ERROR'

const initialState = {
    character: {},
    error: false,
    isLoading: true
}

const randomcharReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHARACTER:
            return {
                ...state,
                character: {...action.character}
            }
        case CHANGE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

const updateCharacter = (character) => {
    return {
        type: 'randomchar-reducer/UPDATE_CHARACTER',
        character,
    }
}

const changeLoading = (isLoading) => {
    return {
        type: 'randomchar-reducer/CHANGE_LOADING',
        isLoading
    }
}

const setError = (error) => {
    return {
        type: 'randomchar-reducer/SET_ERROR',
        error
    }
}

export const updateCharacterThunk = (id) => {
    return async (dispatch) => {
        dispatch(setError(false))
        dispatch(changeLoading(true))
        await marvelServiceAPI.getCharacter(id)
            .then((response) => {
                let char = response.results[0]
                dispatch(updateCharacter({
                    name: char.name,
                    id: char.id,
                    description: char.description,
                    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
                    wiki: char.urls[1].url,
                }))
            })
            .catch((err) => {
                dispatch(setError(true))
            })

        dispatch(changeLoading(false))
    }
}

export default randomcharReducer