import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import characterAboutReducer from './characterabout-reducer'
import characterListReducer from './characterlist-reducer'
import comicsListReducer from './comicslist-reducer'
import findReducer from './find-reducer'
import randomcharReducer from './randomchar-reducer'
import singleComicsReducer from './singlecomics-reducer'


const reducer = combineReducers({
    randomReducer: randomcharReducer,
    characterListReducer: characterListReducer,
    characterAboutReducer: characterAboutReducer,
    singleComicsReducer: singleComicsReducer,
    comicsListReducer: comicsListReducer,
    findReducer: findReducer,

})

const store = createStore(reducer, applyMiddleware(thunk))

export default store