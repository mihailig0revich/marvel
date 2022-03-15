import { Link, NavLink } from 'react-router-dom'
import Button from '../../comon/button/Button'

import Skeleton from './Skeleton'

import "./characterCard.scss"

export default function CharacterCard({characterInf = {}, isLoading = true, error = false}) {
    let handler = (e) => {
        console.log(e.changedTouches[0]);
    }

    if (isLoading) return <Skeleton/>

    return (
        <div onTouchStart={handler} className="characters__about">
            <div className="characters__about__header">
                <img src={characterInf.thumbnail} alt="character avatar" />
                <div className="characters__about__header__right">
                    <h3>{characterInf.name}</h3>
                    <NavLink to={`character/${characterInf.id}`}><Button name = {"HOMEPAGE"}/></NavLink>
                    <Button name = {"WIKI"} customStyle = {['gray']}/>
                </div>
            </div>
            <div className="characters__about__text">
                {characterInf.description}
            </div>
            <div className="characters__about__comics">
                <h3>Comics:</h3>
                <ul>
                    {
                        characterInf.comics 
                            ? characterInf.comics.map((item, index) => {
                                if (index < 7) {
                                    return (
                                        <Link key={item.id} to = {`comics/${item.id}`}><li><p>{item.name}</p></li></Link>
                                    )
                                }
                            })
                            : null
                    }
                    <NavLink to={`character/${characterInf.id}`}><Button name = {'MORE'}/></NavLink>
                </ul>
            </div>
        </div>
    )
}