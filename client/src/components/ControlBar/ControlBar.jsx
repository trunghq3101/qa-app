import React from 'react'
import classes from './ControlBar.module.css'

export default (props) => (
    <div className={classes.ControlBar}>
        {props.children}
    </div>
)
