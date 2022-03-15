import Button from '../comon/button/Button'
import Banner from '../comon/banner/Banner'
import Loader from '../comon/loader/Loader'

import './comics.scss'

export default function Comics ({
    comicsList = [],
    isLoading = true, 
    openComics = function(){},
    addComics = function(){}
}) {

    const list = (
        comicsList.map((item, index) => {
            return (
                <div data-id = {item.id} onClick={openComics} key={index} className="comics__list__unit">
                    <img src={item.thumbnail} alt="Comics" />
                    <p className='comics__list__unit__name'>{item.name}</p>
                    <p className='comics__list__unit__price'>9.99$</p>
                </div>
            )
        })
    )

    return (
        <div className="comics">
            <Banner/>
            <div className="comics__list">
                {list}
            </div>
            {
                isLoading
                    ? <Loader/>
                    : <div className="comics__button"><Button cb = {addComics} name = {'LOAD MORE'}/></div>
            }
        </div>
    )
}