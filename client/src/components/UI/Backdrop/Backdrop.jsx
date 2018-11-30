import React from 'react'
import classes from './Backdrop.module.css'

export default (props) => {
    return (
        props.show ? (
        <div className={classes.Backdrop} onClick={props.clicked}>
            {props.children}
        </div>) : null
    )
}
