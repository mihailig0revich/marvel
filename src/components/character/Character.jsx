import Banner from "../comon/banner/Banner";
import Loader from '../comon/loader/Loader'

import './character.scss'
import { Link } from "react-router-dom";



export default function Characer ({characterInf = {}, isLoading = true}) {

    if (isLoading) return <Loader/>

    return (
        <div className="character">
            <Banner/>
            <div className="character__about">
                <img src={characterInf.thumbnail} alt="character image"/>
                <div className="character__about__text">
                    <h3>{characterInf.name}</h3>
                    <p>
                        {characterInf.description}
                    </p>
                    
                    <div className="character__about__text__comics">
                        <h3>Comics:</h3>
                        <ul>
                            {
                                characterInf.comics 
                                    ? characterInf.comics.map((item) => {
                                        return (
                                            <Link key={item.id} to = {`/comics/${item.id}`}><li><p>{item.name}</p></li></Link>
                                        )
                                    })
                                    : null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}