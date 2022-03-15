
import Button from '../../comon/button/Button'
import Error from '../../comon/error/Error'
import Loader from '../../comon/loader/Loader'

import './characterList.scss'

const CharacterList = ({
    characterList = [],
    addPage = function(){}, 
    setCharacter = function(){},
    activeCharacter = 0,
    isLoading = true,
    error = false
}) => {

    if (error) return <Error/>

    const charList = (
        characterList.map((item) => {
            const styledClass = activeCharacter == item.id ? ' active' : '';
            return (
                <div data-id = {`${item.id}`} onClick={setCharacter} key={item.id} className={"characters__list__unit" + styledClass}>
                    <img src={item.thumbnail} alt="Caracter avatar" />
                    <h3>{item.name}</h3>
                </div>
            )
        })
    )

    return (
        <div className='characters__wrapper'>
            <div className="characters__list">
                {charList}            
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