import React from 'react'
import classes from './Button.module.css'

export default (props) => {
    return (
        <span 
            className={
                props.btnType.split(" ")
                    .map(name => classes[name])
                    .join(" ")
            }
            onClick={props.onClick}>
            {props.children}
        </span>
    )
}
