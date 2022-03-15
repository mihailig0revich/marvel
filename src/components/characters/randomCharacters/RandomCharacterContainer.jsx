import { connect } from 'react-redux';
import { compose } from 'redux';
import RandomCharacter from './RandomCharacter';
import { updateCharacterThunk } from '../../../redux/randomchar-reducer';
import { useEffect } from 'react';

const RandomCharacterContainer = ({updateCharacterThunk, ...props}) => {

    const randomCharacter = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        updateCharacterThunk(id)
    }

    useEffect(() => {
        randomCharacter()
    }, [])
    
    return (
        <RandomCharacter randomCharacter = {randomCharacter} {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        character: state.randomReducer.character,
        error: state.randomReducer.error,
        isLoading: state.randomReducer.isLoading
    }
}

export default compose(
    connect(mapStateToProps, {updateCharacterThunk})
)(RandomCharacterContainer)