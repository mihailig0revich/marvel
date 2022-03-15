import { connect } from "react-redux"
import { compose } from "redux"
import Characters from "./Characters"

import { changeCharacterThunk } from "../../redux/characterabout-reducer"
import { useEffect } from "react"

const CharactersContainer = (props) => {

    return (
        <Characters {...props}/>
    )
}

const mapDispatchToProps = (state) => {
    return {
        characterInf: state.characterAboutReducer.characterInf,
        error: state.characterAboutReducer.error,
        isLoading: state.characterAboutReducer.isLoading,
    }
}

export default compose(
    connect(mapDispatchToProps, {changeCharacterThunk})
)(CharactersContainer)