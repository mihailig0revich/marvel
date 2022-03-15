import { marvelServiceAPI } from "../api/api";

const CHANGE_CHARACTER = 'characterabout-reducer/CHANGE_CHARACTER'
const CHANGE_LOADING = 'characterabout-reducer/CHANGE_LOADING'
const SET_ERROR = 'characterabout-reducer/SET_ERROR'

const initialState = {
    characterInf: {},
    error: false,
    isLoading: true
}

const characterAboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHARACTER:
            return {
                ...state,
                characterInf: {...action.characterInf}
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

const changeCharacter = (characterInf) => {
    return {
        type: 'characterabout-reducer/CHANGE_CHARACTER',
        characterInf
    }
}

const changeLoading = (isLoading) => {
    return {
        type: 'characterabout-reducer/CHANGE_LOADING',
        isLoading
    }
}

const setError = (error) => {
    return {
        type: 'characterabout-reducer/SET_ERROR',
        error
    }
}

export const changeCharacterThunk = (id) => {
    return async (dispatch) => {
        dispatch(setError(false));
        dispatch(changeLoading(true))
        await marvelServiceAPI.getCharacter(id)
            .then((res) => {
                let char = res.results[0]
                const data = {
                    name: char.name,
                    id: char.id,
                    description: char.description,
                    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
                    wiki: char.urls[1].url,
                    comics: char.comics.items.map((item) => {
                        return {
                            name: item.name,
                            id: item.resourceURI.split('/').at(-1)
                        }
                    })
                }

                dispatch(changeCharacter(data))
            })
            .catch((err) => {
                dispatch(setError(true));
            })
        dispatch(changeLoading(false))
    }
}

export default characterAboutReducer