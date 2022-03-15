import avengers from '../../../resources/img/Avengers.png'
import avengersLogo from '../../../resources/img/Avengers_logo.png'

import './banner.scss'

export default function Banner() {
    return (
        <div className="banner">
            <img src={avengers} alt="image" className='banner__left'/>
            <div className="banner__text">
                <span>New comics every week!</span>
            </div>
            <img src={avengersLogo} alt="image" className='banner__right'/>
        </div>
    )
    
}