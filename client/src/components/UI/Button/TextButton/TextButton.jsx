import React from 'react'
import classes from './TextButton.module.css'

export default (props) => {
    return (
        <span 
            className={
                `${classes[props.btnType]} 
                ${props.desktopOnly && classes.DesktopOnly}
                ${props.mobileOnly && classes.MobileOnly}`
            }
            onClick={props.onClick}>
            {props.children}
        </span>
    )
}
