import { marvelServiceAPI } from "../api/api";

const ADD_CHARACTER = 'characterlist-reducer/ADD_CHARACTER';
const CHANGE_LOADING = 'characterlist-reducer/CHANGE_LOADING';
const SET_ERROR = 'characterlist-reducer/SET_ERROR';

const initialState = {
    characterList: [],
    offset: 0,
    error: false,
    isLoading: true
}

const characterListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                characterList: [...state.characterList, ...action.characterList],
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
            return state
    }
}

const addCharacter = (characterList) => {
    return {
        type: 'characterlist-reducer/ADD_CHARACTER',
        characterList
    }
}

const changeLoading = (isLoading) => {
    return {
        type: 'characterlist-reducer/CHANGE_LOADING',
        isLoading
    }
}

const setError = (error) => {
    return {
        type: 'characterlist-reducer/SET_ERROR',
        error
    }
}

export const addCharacterThunk = (offset) => {
    return async (dispatch) => {
        dispatch(setError(false))
        dispatch(changeLoading(true))
        await marvelServiceAPI.getAllCharacter(offset)
            .then((response) => {
                const data = response.results.map((item) => {
                    return {
                        name: item.name,
                        id: item.id,
                        thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension 
                    }
                })
                dispatch(addCharacter(data))
            }).catch((err) => {
                dispatch(setError(true))
            })
        dispatch(changeLoading(false))
    }
}

export default characterListReducer