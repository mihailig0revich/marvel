import Banner from "../comon/banner/Banner";
import Loader from '../comon/loader/Loader'

import './singleComics.scss'

export default function Singlecomics ({comicsInf = {}, isLoading = true}) {
    
    if (isLoading) return <Loader/>

    return (
        <div className="character">
            <Banner/>
            <div className="character__about">
                <img src={comicsInf.thumbnail} alt="character image"/>
                <div className="character__about__text">
                    <h3>{comicsInf.name}</h3>
                    <p>
                        {comicsInf.description}
                    </p>    
                    <p>
                        {comicsInf.pageCount} pages
                    </p>
                    <p>
                        Language: {comicsInf.language}
                    </p>
                    <span className="character__about__text__price">
                        {comicsInf.price}$
                    </span>
                </div>
            </div>
        </div>
    )
}