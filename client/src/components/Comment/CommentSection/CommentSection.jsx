import React from 'react'
import classes from './CommentSection.module.css'

export default (props) => (
    <div className={classes.CommentSection}>
        {props.children}
    </div>
)