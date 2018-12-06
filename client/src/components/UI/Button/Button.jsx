import React from 'react'
import classes from './Button.module.css'
import StyleClasses from '../../../assets/lib/StyleClasses';

export default (props) => {
    return (
        <span 
            className={StyleClasses(null, props.btnType, classes)}
            onClick={props.onClick}>
            {props.children}
        </span>
    )
}
