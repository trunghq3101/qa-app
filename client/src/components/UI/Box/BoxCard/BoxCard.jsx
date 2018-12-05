import React from 'react'
import classes from './BoxCard.module.css'

export default (props) => (
    <div className={classes.Box}>
        {props.children}
    </div>
)