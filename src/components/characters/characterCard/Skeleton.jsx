import './skeleton.scss'

export default function Skeleton() {
    return (
        <div className="skeleton">
            <p>Please select a character to see information</p>
            <div className="skeleton__header">
                <div className="skeleton__header__avatar"></div>
                <div className="skeleton__header__right"></div>
            </div>
            <div className="skeleton__text"></div>
            <div className="skeleton__text"></div>
            <div className="skeleton__text"></div>
        </div>
    )
}