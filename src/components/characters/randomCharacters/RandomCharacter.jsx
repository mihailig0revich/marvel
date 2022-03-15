import Button from "../../comon/button/Button";
import mjolnir from '../../../resources/img/mjolnir.png'

import './randomCharacter.scss'
import { NavLink } from "react-router-dom";
import RandomLeft from "./RandomLeft";

export default function({randomCharacter = function(){}, ...props}) {    
    return (
        <div className="random">
            <RandomLeft {...props}/>
            <div className="random__right">
                <div className="random__right__text">
                    <p>Random character for today!</p>
                    <p>Do you want to get to know him better?</p>
                    <p>Or choose another one</p>
                </div>
                <img src={mjolnir} alt="image" />
                <Button cb = {randomCharacter} name='TRY IT'/>
            </div>
        </div>
    )
}

// {character.description}