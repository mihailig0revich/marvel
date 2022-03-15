import { NavLink } from "react-router-dom";
import Button from "../../comon/button/Button";
import Error from "../../comon/error/Error";
import Loader from "../../comon/loader/Loader";

const RandomLeft = ({character = {}, isLoading = false, error = false}) => {
    const hasImage = character.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    const styleImage = "random__left__" + (hasImage ? "" : "notfound")
    const description = character.description && (character.description.length > 200) ? character.description.slice(0,197) + '...' : ''

    if (error)  return <Error/>
    if (isLoading) return <Loader/>

    return (
        <div className="random__left">
            <img src={character.thumbnail} className={styleImage} alt="avatar" />
            <div className="random__left__about">
                <h2 className="random__left__about__name">
                    {character.name}
                </h2>
                <p className="random__left__about__description">
                    {
                        description
                    }
                </p>
                <div className="random__left__about__buttons">
                    <NavLink to={`character/${character.id}`}><Button name = {"HOMEPAGE"}/></NavLink>
                    <Button 
                        name = {"WIKI"} 
                        customStyle = {["gray"]} 
                        type = 'link'
                        link = {character.wiki}
                    />
                </div>
            </div>
        </div>
    )
}

export default RandomLeft