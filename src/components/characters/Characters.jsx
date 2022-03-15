import CharacterCard from './characterCard/CharacterCard'
import Find from './Find'
import RandomCharacterContainer from './randomCharacters/RandomCharacterContainer'
import CharacterListContainer from './characterList/CharacterListContainer'

import './characters.scss'
import FindContainer from './FindContainer'



const Characters = ({characterInf, changeCharacterThunk, isLoading = true, error = false}) => { 
    
    return (
        <div className="wrapper">
            <FindContainer/>
            <RandomCharacterContainer/>
            <div className="characters">
                <CharacterListContainer activeCharacter = {characterInf.id} changeCharacterThunk = {changeCharacterThunk}/>
                <CharacterCard characterInf = {characterInf} isLoading = {isLoading} error = {error}/>
            </div>
        </div>
    )
}

export default Characters