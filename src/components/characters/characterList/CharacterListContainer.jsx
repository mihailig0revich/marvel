import { connect } from "react-redux"
import CharacterList from "./CharacterList"
import { addCharacterThunk } from "../../../redux/characterlist-reducer"
import { compose } from "redux"
import { useEffect } from "react"

const CharacterListContainer = ({addCharacterThunk = function(){}, offset = 0, characterList = [], ...props}) => {
    useEffect(()=> {
        if (characterList.length <= 0) {
            addCharacterThunk(offset)
        }
    }, [])

    return (
        <CharacterList addCharacterThunk = {addCharacterThunk} offset = {offset} characterList = {characterList} {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        characterList: state.characterListReducer.characterList,
        offset: state.characterListReducer.offset,
        error: state.characterListReducer.error,
        isLoading: state.characterListReducer.isLoading,
    }
}

export default compose(
    connect(mapStateToProps, {addCharacterThunk})
)(CharacterListContainer)