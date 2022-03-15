import { marvelServiceAPI } from "../api/api";

const ADD_COMICS = 'comicslist-reducer/ADD_COMICS';
const CHANGE_LOADING = 'comicslist-reducer/CHANGE_LOADING';
const SET_ERROR = 'comicslist-reducer/SET_ERROR';

const initialState = {
    comicsList: [],
    offset: 0,
    isLoading: true,
    error: false,
}

const comicsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMICS:
            return {
                ...state,
                comicsList: [...state.comicsList, ...action.comicsList],
                offset: state.offset + 9,
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

const addComics = (comicsList) => {
    return {
        type: 'comicslist-reducer/ADD_COMICS',
        comicsList
    }
}

const changeLoading = (isLoading) => {
    return {
        type: 'comicslist-reducer/CHANGE_LOADING',
        isLoading
    }
}

const setError = (error) => {
    return {
        type: 'comicslist-reducer/SET_ERROR',
        error
    }
}

export const addComicsThunk = (offset) => {
    return async (dispatch) => {
        dispatch(setError(false))
        dispatch(changeLoading(true))
        await marvelServiceAPI.getAllComics(offset)
            .then((response) => {
                const data = response.results.map((item) => {
                    return {
                        name: item.title,
                        id: item.id,
                        thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension 
                    }
                })
                dispatch(addComics(data))
            }).catch((err) => {
                dispatch(setError(true))
            })

        dispatch(changeLoading(false))
    }
}

export default comicsListReducer