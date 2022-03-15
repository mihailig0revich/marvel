import { useState } from "react";
import Button from "../comon/button/Button";

import './find.scss'

export default function Find ({
    handleChange = function(){},
    handleSubmit = function(){},
    handleFocus = function(){},
    handleClick = function(){},
    charList = [],
    value = '',
    error = '',    
    rootEl,
}) {

    const findCharList = (
        <ul className="find__form__results">
            {
                charList.map((item) => {
                    return (
                        <li className="find__form__results__element" onClick={handleClick} data-id = {item.id} key={item.id}>{item.name}</li>
                    )
                })
            }
        </ul>
    )

    const errorList = (
        <ul className="find__form__results">
            <li className="find__form__results__error" >{error}</li>
        </ul>
    )

    return (
        <div className="find">
            <form ref={rootEl} onSubmit={handleSubmit} className="find__form">
                <span className="find__form__title">Search: </span>
                <input
                    onFocus = {handleFocus} 
                    value={value} 
                    onChange = {handleChange} 
                    placeholder="Enter name" 
                    type="text" 
                />
                {
                    error 
                        ? errorList
                        : findCharList
                }
            </form>
        </div>
    )
}