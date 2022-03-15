import { useEffect, useRef } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { compose } from "redux"

import { changeValue, setchar, setCharThunk, setError } from "../../../redux/find-reducer"
import Find from "./Find"

const FindContainer = ({
    changeValue = function (){}, 
    setCharThunk = function(){},
    setchar = function(){},
    setError = function(){},
    value = '',
    ...props
}) => {

    useEffect(() => {
        if (value.length > 2) {
            setCharThunk(value)
        } else {
            setchar([])
        }
    }, [value])

    const navigate = useNavigate()

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => {
            if (rootEl.current && !rootEl.current.contains(e.target)) {
                setchar([])
                setError('')
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const handleChange = (e) => {
        changeValue(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(value);
        e.preventDefault()
    }

    const handleFocus = () => {
        if (value.length > 2) {
            setCharThunk(value)
        }
    }

    const handleClick = (e) => {
        navigate(`character/${e.currentTarget.getAttribute('data-id')}`)
    }

    return (
        <Find 
            value={value} 
            handleChange = {handleChange} 
            handleSubmit = {handleSubmit}
            handleFocus = {handleFocus}
            handleClick = {handleClick}
            rootEl = {rootEl}
            {...props}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        charList: state.findReducer.charList,
        value: state.findReducer.value,
        error: state.findReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (value) => {
            dispatch(changeValue(value))
        },
        setchar: (charList) => {
            dispatch(setchar(charList))
        },
        setError: (error) => {
            dispatch(setError(error))
        },
    }
}

export default compose(
    connect(null, {setCharThunk}),
    connect(mapStateToProps, mapDispatchToProps)
)(FindContainer)