import { marvelServiceAPI } from "../api/api"

const CHANGE_COMICS = "singlecomics-reducer/CHANGE_COMICS"
const CHANGE_LOADING = 'singlecomics-reducer/CHANGE_LOADING'
const SET_ERROR = 'singlecomics-reducer/SET_ERROR'

const initialState = {
    comicsInf: {},
    error: false,
    isLoading: false
}

const singleComicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COMICS:
            return {
                ...state,
                comicsInf: {...action.comicsInf}
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
            return state
    }
}

const changeComics = (comicsInf) => {
    return {
        type: 'singlecomics-reducer/CHANGE_COMICS',
        comicsInf
    }
}

const changeLoading = (isLoading) => {
    return {
        type: 'singlecomics-reducer/CHANGE_LOADING',
        isLoading
    }
}

const setError = (error) => {
    return {
        type: 'singlecomics-reducer/SET_ERROR',
        error
    }
}


export const changeComicsThunk = (id) => {
    return async (dispatch) => {
        dispatch(setError(false));
        dispatch(changeLoading(true))
        await marvelServiceAPI.getComics(id)
            .then((res) => {
                let char = res.results[0]
                const data = {
                    name: char.title,
                    id: char.id,
                    description: char.description,
                    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
                    pageCount: char.pageCount,
                    price: char.prices[0].price,
                    language: char.textObjects[0] ? char.textObjects[0].language : "unknown"
                }

                dispatch(changeComics(data))
            })
            .catch((err) => {
                dispatch(setError(true));
            })
        dispatch(changeLoading(false))
    }
}

export default singleComicsReducer