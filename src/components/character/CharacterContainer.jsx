import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom"
import { compose } from "redux";
import { changeCharacterThunk } from "../../redux/characterabout-reducer";

import Error from '../comon/error/Error'
import Characer from "./Character"

const CharacerContainer = ({characterInf, changeCharacterThunk, error = false, isLoading = true}) => {
    const {id} = useParams();

    useEffect(() => {
        changeCharacterThunk(id)
    }, [])

    if (error) return <Error/>

    return <Characer characterInf = {characterInf} isLoading = {isLoading}/>
}

const mapDispatchToProps = (state) => {
    return {
        characterInf: state.characterAboutReducer.characterInf,
        isLoading: state.characterAboutReducer.isLoading,
        error: state.characterAboutReducer.error,
    }
}

export default compose(
    connect( mapDispatchToProps, {changeCharacterThunk})
)(CharacerContainer)