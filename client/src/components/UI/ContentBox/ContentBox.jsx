import React from 'react'
import classes from './ContentBox.module.css'

export default (props) => (
    <div className={classes.ContentBox}>
        {props.children}
    </div>
)