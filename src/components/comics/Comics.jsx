import { useNavigate } from 'react-router-dom'

import Button from '../comon/button/Button'
import Banner from '../comon/banner/Banner'
import Loader from '../comon/loader/Loader'


import './comics.scss'


export default function Comics ({comicsList = [], offset = 0, addComicsThunk = function(){}, isLoading = true}) {
    const navigate = useNavigate()

    const addComics = () => {
        addComicsThunk(offset)
    }

    return (
        <div className="comics">
            <Banner/>
            <div className="comics__list">
                {
                    comicsList.map((item, index) => {
                        const openComics = () => {
                            navigate(`${item.id}`)
                        }

                        return (
                            <div onClick={openComics} key={index} className="comics__list__unit">
                                <img src={item.thumbnail} alt="Comics" />
                                <p className='comics__list__unit__name'>{item.name}</p>
                                <p className='comics__list__unit__price'>9.99$</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                isLoading
                    ? <Loader/>
                    : <div className="comics__button"><Button cb = {addComics} name = {'LOAD MORE'}/></div>
            }
        </div>
    )
}