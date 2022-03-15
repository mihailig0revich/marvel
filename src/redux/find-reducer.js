import { marvelServiceAPI } from "../api/api"

const SET_CHAR = 'find-reducer/SET_CHAR';
const SET_ERROR = 'find-reducer/SET_ERROR';
const CHANGE_VALUE = 'find-reducer/CHANGE_VALUE';

const initialState = {
    value: '',
    charList: [],
    error: '',
}

const findReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHAR:
            return {
                ...state,
                charList: [...action.charList]
            };
        case SET_ERROR: 
            return {
                ...state,
                error: action.error
            }
        case CHANGE_VALUE:
            return {
                ...state,
                value: action.value
            }
        default:
            return state;
    }
}

export const setchar = (charList) => {
    return {
        type: "find-reducer/SET_CHAR",
        charList,
    }
}

export const setError = (error) => {
    return {
        type: "find-reducer/SET_ERROR",
        error
    }
}

export const changeValue = (value) => {
    return {
        type: "find-reducer/CHANGE_VALUE",
        value
    }
}

export const setCharThunk = (value) => {
    return async (dispatch) => {
        dispatch(setError(''))
        let transformValue = value.split(' ').join('%20')
        await marvelServiceAPI.findCharacters(transformValue)
            .then((res) => {

                if (res.results.length === 0) throw new Error('Сharacter not found')

                let char = res.results.map((item) => {
                    return {
                        name: item.name,
                        id: item.id
                    }
                })
                dispatch(setchar(char))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setchar([]))
            })
    }
}

export default findReducer;