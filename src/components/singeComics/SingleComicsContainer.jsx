import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { compose } from "redux"
import Singlecomics from "./SingleComics"
import { changeComicsThunk } from "../../redux/singlecomics-reducer"

import Error from '../comon/error/Error'

const SingleComicsContainer = ({comicsInf = {}, changeComicsThunk = function(){}, error = false, isLoading = true}) => {
    const {id} = useParams()
    
    useEffect(() => {
        changeComicsThunk(id)
    }, [id])

    if (error) return <Error/>

    return <Singlecomics comicsInf = {comicsInf} isLoading = {isLoading}/>
}

const mapStateToProps = (state) => {
    return {
        comicsInf: state.singleComicsReducer.comicsInf,
        isLoading: state.singleComicsReducer.isLoading,
        error: state.singleComicsReducer.error,
    }
}

export default compose(
    connect(mapStateToProps, {changeComicsThunk})
)(SingleComicsContainer)