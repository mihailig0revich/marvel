
import Button from '../../comon/button/Button'
import Error from '../../comon/error/Error'
import Loader from '../../comon/loader/Loader'

import './characterList.scss'

const CharacterList = ({
    characterList = [], 
    offset = 0, 
    addCharacterThunk = function(){}, 
    activeCharacter = 0,
    changeCharacterThunk = function(){},
    isLoading = true,
    error = false
}) => {

    const addPage = () => {
        addCharacterThunk(offset)
    }

    if (error) return <Error/>

    return (
        <div className='characters__wrapper'>
            <div className="characters__list">
                {
                    characterList.map((item) => {
                        const setCharacter = () => {
                            
                            changeCharacterThunk(item.id)
                        }

                        const styledClass = activeCharacter == item.id ? ' active' : '';

                        return (
                            <div onClick={setCharacter} key={item.id} className={"characters__list__unit" + styledClass}>
                                <img src={item.thumbnail} alt="Caracter avatar" />
                                <h3>{item.name}</h3>
                            </div>
                        )
                    })
                }            
            </div>
            {
                isLoading
                    ? <Loader/>
                    : <div className='characters__wrapper__button'><Button cb = {addPage} name='MORE'/></div>
            }
        </div>
    )
}

export default CharacterList