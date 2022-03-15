import { connect } from "react-redux"
import { compose } from "redux"
import Comics from "./Comics"
import { addComicsThunk } from "../../redux/comicslist-reducer"
import { useEffect } from "react"
import Error from '../comon/error/Error'

const ComicsContainer = ({comicsList = [], offset = 0, addComicsThunk = function(){}, error = false, isLoading = true}) => {
    useEffect(() => {
        if (comicsList.length === 0) {
            addComicsThunk(offset)
        }
    }, [])

    if (error) return <Error/>

    return <Comics comicsList = {comicsList} addComicsThunk = {addComicsThunk} offset = {offset} isLoading = {isLoading}/>
}

const mapStateToProps = (state) => {
    return {
        comicsList: state.comicsListReducer.comicsList,
        offset: state.comicsListReducer.offset,
        isLoading: state.comicsListReducer.isLoading,
        error: state.comicsListReducer.error,
    }
}

export default compose(
    connect(mapStateToProps, {addComicsThunk})
)(ComicsContainer)