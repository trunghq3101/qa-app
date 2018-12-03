import React from 'react'
import classes from './BoxBottomBorder.module.css'

export default (props) => (
    <div className={classes.Box}>
        {props.children}
    </div>
)
