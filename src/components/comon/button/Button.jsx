import './button.scss'

const Button = ({
    name = 'BUTTON', 
    customStyle = ["red"], 
    type = 'button', 
    link = '#', 
    cb = () => {}
}) => {
    
    if (type === 'link') {
        return (
            <a 
                href= {link}
                className={
                    customStyle.join(' ')
                }
            >
                {name}
            </a>
        )
    }

    return (
        <button 
            onClick={cb}
            className={
                customStyle.join(' ')
            }
        >
            {name}
        </button>
    )
}

export default Button